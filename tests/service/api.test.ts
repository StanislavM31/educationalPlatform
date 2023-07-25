import { registration, authorizationUser } from "../../src/service/api.service"
import * as repository from '../../src/repository/api.repository'
import bcrypt from "bcrypt";

describe('registration', () => {
    test('Success', async () => {
        const mockGetByEmail = jest.spyOn(repository, "getByEmail");
        const mockHash = jest.spyOn(bcrypt, 'hash');
        const mockRegistration = jest.spyOn(repository, "registrationDB");

        mockGetByEmail.mockResolvedValue([]);
        mockHash.mockResolvedValue('1ziy123u214ytut21');
        mockRegistration.mockResolvedValue([
            {
                id: 1,
                "name": "user_0",
                "surname": "test_surname",
                "email": "test@gmail.com",
                "pwd": "1ziy123u214ytut21"
            }
        ])
        const result = await registration("user_0", "test_surname","test@gmail.com","1ziy123u214ytut21")
        expect(result).toEqual([
            {
                id: 1,
                "name": "user_0",
                "surname": "test_surname",
                "email": "test@gmail.com",
                "pwd": "1ziy123u214ytut21"
            }
        ])
    })
    test('error', async()=>{
        const mockGetByEmail = jest.spyOn(repository, "getByEmail");
        mockGetByEmail.mockResolvedValue([{
            id: 1,
            "name": "user_0",
            "surname": "test_surname",
            "email": "test@gmail.com",
            "pwd": "1ziy123u214ytut21"
        }])

        try {
            await registration("user_0","test_surname","test@gmail.com","77890")
        } catch (error:any) {
            expect(mockGetByEmail).toHaveBeenCalled();
            expect(mockGetByEmail).toHaveBeenCalledWith("test@gmail.com");
            expect(error.message).toBe(`Такой email уже зарегестрирован`);
        }
    })
})

describe("authorizationUser", ()=>{
    test("Success", async ()=>{
        const mockUserFound = jest.spyOn(repository, "getByEmail")
        const mockCompare = jest.spyOn(bcrypt, "compare");

        mockUserFound.mockResolvedValue([{
            id:1,
            "name": "aaa",
            "surname": "a_surname",
            "email": "test@gmail.com",
            "pwd": "43lk43hjy6bh8"
        }])
        mockCompare.mockResolvedValue(true);

        const result = await authorizationUser("test@gmail.com", "43lk43hjy6bh8");

        expect(result).toBe("Авторизированный пользователь [{\"id\":1,\"name\":\"aaa\",\"surname\":\"a_surname\",\"email\":\"test@gmail.com\",\"pwd\":\"43lk43hjy6bh8\"}]")
    })
    test('error', async ()=>{
        const mockUser = jest.spyOn(repository, "getByEmail");

        mockUser.mockResolvedValue([]);

        try {
            const result = await authorizationUser("test@gmail.com", '12345')
        } catch (error:any) {
            expect(error.message).toBe('пользователя с таким email не существует')
        }
    })

    test('error', async ()=>{
        const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail');
        const mockBcryptFunction = jest.spyOn(bcrypt, "compare");

        mockAuthorizationUser.mockResolvedValue([{
            id:1,
            "name": "aaa",
            "surname": "a_surname",
            "email": "test@gmail.com",
            "pwd": "122134"
        }])
        mockBcryptFunction.mockResolvedValue(false);

        try {
            await authorizationUser("test@gmail.com","122134");
        } catch (error:any) {
            expect(mockAuthorizationUser).toHaveBeenCalled();
            expect(error.message).toBe('пароли не совпадают. Авторизация невозможна')
        }
    })
})
