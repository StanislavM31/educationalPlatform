import { createUser, getAllUsers, getUserById, deleteUserById, updateUserById } from "../../src/service/user.service"
import * as repository from '../../src/repository/user.repository'


describe('getAllUsers_function', () => {
    test("Success", async () => {
        const funcRepo = jest.spyOn(repository, "getAllUsersDB");
        funcRepo.mockResolvedValue(
            [
                {
                    "id": 1,
                    "name": "TestName",
                    "surname": "TestSurname",
                    "email": "test@gmail.com",
                    "pwd": "123"
                }
            ]);

        const result = await getAllUsers();
        expect(funcRepo).toHaveBeenCalled(); //проверка, что что функция вызывалась
        expect(result).toEqual([
            {
                "id": 1,
                "name": "TestName",
                "surname": "TestSurname",
                "email": "test@gmail.com",
                "pwd": "123"
            }
        ]);
        expect(result.length).toBeGreaterThan(0);
    })
    test('error', async () => {
        const functRepo = jest.spyOn(repository, "getAllUsersDB");
        functRepo.mockResolvedValue([]);
        try {
            await getAllUsers();
        } catch (error: any) {
            expect(functRepo).toHaveBeenCalled();
            expect(error.message).toBe(`table 'users' is empty`);
        }
    })
})

/* describe('createUser_function', () => {
    test('Success', async () => {
        const funcRepo = jest.spyOn(repository, 'createUserDB');
        funcRepo.mockResolvedValue([{
            "id": 1,
            "name": "TestName",
            "surname": "TestSurname",
            "email": "test@gmail.com",
            "pwd": "123"
        }]);
        const result = await createUser("TestName", "TestSurname", "test@gmail.com", "123");

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual(
            [
                {
                    "id": 1,
                    "name": "TestName",
                    "surname": "TestSurname",
                    "email": "test@gmail.com",
                    "pwd": "123"
                }
            ]);
        expect(result).toHaveLength(1);
    })
    test('error', async () => {
        const functRepo = jest.spyOn(repository, "createUserDB");
        functRepo.mockResolvedValue([]);
        try {
            const result = await createUser("TestName", "TestSurname", "test@gmail.com", "123");
        } catch (error: any) {
            expect(functRepo).toHaveBeenCalled();
            expect(error.message).toBe('failed to save new user')
        }
    })
}) */
describe('createUser_function', () => {
    test('Success', async () => {
        const funcRepo = jest.spyOn(repository, "createUserDB");
        funcRepo.mockResolvedValue([
            {
                id: 1,
                "name": "test_name",
                "surname": "test_surname",
                "email": "test@gmail.com",
                "pwd": "123456789",
            }
        ]);
        const result = await createUser("test_name", "test_surname", "test@gmail", "123456789");
        expect(result).toEqual([
            {
                id: 1,
                "name": "test_name",
                "surname": "test_surname",
                "email": "test@gmail.com",
                "pwd": "123456789",
            }
        ])
        expect(result.length).toBe(1);
        expect(funcRepo).toHaveBeenCalled();
    })
    test('error', async ()=>{
        const funcRepo = jest.spyOn(repository, "createUserDB");
        funcRepo.mockResolvedValue([]);
        try {
            await createUser("test_name", "test_surname", "test@gmail", "123456789");
        } catch (error:any) {
            expect(error.message).toBe('failed to save new user')
        }
    })
})
describe("getUserById_function", () => {
    test('Success', async () => {
        const funcRepo = jest.spyOn(repository, "getUserByIdDB");
        funcRepo.mockResolvedValue([
            {
                "id": 1,
                "name": "TestName",
                "surname": "TestSurname",
                "email": "test@gmail.com",
                "pwd": "123"
            }
        ])//предполагаемый возвращаемый результат
        const result = await getUserById(1);
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{
            "id": 1,
            "name": "TestName",
            "surname": "TestSurname",
            "email": "test@gmail.com",
            "pwd": "123"
        }]);
        expect(result.length).toBeGreaterThan(0);
    })
})

describe("updateUserById_function", () => {
    test("Success", async () => {
        const funcRepo = jest.spyOn(repository, "updateUserByIdDB");
        funcRepo.mockResolvedValue([
            {
                "id": 1,
                "name": "updated_user",
                "surname": "surname_updated",
                "email": "test@gmail.com",
                "pwd": "7788"
            }
        ]);
        const result = await updateUserById(1, "updated_user", "surname_updated", "test@gmail.com", "7788");
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([
            {
                "id": 1,
                "name": "updated_user",
                "surname": "surname_updated",
                "email": "test@gmail.com",
                "pwd": "7788"
            }
        ]);
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].pwd).toBe("7788");
    })
})

describe("deleteUserById_function", () => {
    test("Success", async () => {
        const funcRepo = jest.spyOn(repository, "deleteUserByIdDB");
        funcRepo.mockResolvedValue([{
            "id": 1,
            "name": "test_user",
            "surname": "test_surname",
            "email": "testuser@gmail.com",
            "pwd": "123"
        }]);
        const result = await deleteUserById(1);
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{
            "id": 1,
            "name": "test_user",
            "surname": "test_surname",
            "email": "testuser@gmail.com",
            "pwd": "123"
        }]);
        expect(result.length).toBeGreaterThan(0);
    })
})