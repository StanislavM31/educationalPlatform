import { registrationDB, getByEmail } from "../../src/repository/api.repository";
const mockUser = { query: jest.fn() }

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => {
                    return mockUser
                })
            }
        })
    }
})

beforeEach(() => jest.clearAllMocks());

describe("api", () => {
    test("registrationDB", async () => {
        const mock = [{
            name: "new_user",
            surname: "sss",
            email: "123@gmail.com",
            pwd: "w1d2",
            id: 3,
        }]
        mockUser.query.mockResolvedValue({
            rows: mock
        });
        const result = await registrationDB("new_user", "sss", "123@gmail.com", "w1d2");
        expect(result).toEqual(mock)
    })
})

describe("getByEmail", () => {
    test("Success", async () => {
        mockUser.query.mockResolvedValue(
            {
                rows: [
                    {
                        id: 3,
                        name: "user",
                        surname: "superuser",
                        email: "123@gmail.com",
                        pwd: "w1d2",
                    }
                ]
            }
        )
        const result = await getByEmail("123@gmail.com");
        expect(result).toEqual([{
            id: 3,
            name: "user",
            surname: "superuser",
            email: "123@gmail.com",
            pwd: "w1d2",
        }])
        expect(mockUser.query).toHaveBeenCalled();
        expect(result[0].id).toBe(3);
        expect(result.length).toBe(1);
    })

})
