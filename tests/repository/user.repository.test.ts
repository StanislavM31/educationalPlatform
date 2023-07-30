import { query } from "express";
import { getAllUsersDB, createUserDB, getUserByIdDB, deleteUserByIdDB, updateUserByIdDB } from "../../src/repository/user.repository";

const mockClient = {
    query: jest.fn()
}

jest.mock("pg", () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => mockClient)
            }
        })
    }
})
afterEach(() => {
    jest.clearAllMocks();
})

describe("getAllUsersDB_function", () => {
    test('success', async () => {
        mockClient.query.mockResolvedValue(
            {
                rows: [
                    {
                        "id": 10,
                        "name": "new_user1",
                        "surname": "abc",
                        "email": "new_user1@gmail.com",
                        "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq"
                    },
                    {
                        "id": 11,
                        "name": "new_user2",
                        "surname": "abc",
                        "email": "new_user2@gmail.com",
                        "pwd": "$2b$04$EnKP/OWbqNESFWjplhPhfufJs/Cyc590peQMQz3Ix8Wd41lbyPdnK"
                    },
                    {
                        "id": 12,
                        "name": "new_user3",
                        "surname": "abc",
                        "email": "test@gmail.com",
                        "pwd": "$2b$04$l3ZTbmQ9.DSchh2QmP.c..H8.1EKiE5v5.tD0T57FUwNM/tjzyDPy"
                    }]
            })
        const result = await getAllUsersDB();
        expect(result).toEqual([
            {
                "id": 10,
                "name": "new_user1",
                "surname": "abc",
                "email": "new_user1@gmail.com",
                "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq"
            },
            {
                "id": 11,
                "name": "new_user2",
                "surname": "abc",
                "email": "new_user2@gmail.com",
                "pwd": "$2b$04$EnKP/OWbqNESFWjplhPhfufJs/Cyc590peQMQz3Ix8Wd41lbyPdnK"
            },
            {
                "id": 12,
                "name": "new_user3",
                "surname": "abc",
                "email": "test@gmail.com",
                "pwd": "$2b$04$l3ZTbmQ9.DSchh2QmP.c..H8.1EKiE5v5.tD0T57FUwNM/tjzyDPy"
            }
        ])
        expect(mockClient.query).toHaveBeenCalled();
    })
})
describe("getUserByIdDB", () => {
    test("Success", async () => {
        mockClient.query.mockResolvedValue(
            {
                rows: [{
                    "id": 10,
                    "name": "new_user1",
                    "surname": "abc",
                    "email": "new_user1@gmail.com",
                    "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq"
                }]
            }
        )
        const result = await getUserByIdDB(10);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                "id": 10,
                "name": "new_user1",
                "surname": "abc",
                "email": "new_user1@gmail.com",
                "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq"
            }
        ])
    })
})

describe("deleteUserByIdDB", () => {
    test("Success", async () => {
        const mock = [
            {
                "id": 3,
                "name": "user_to_delete",
                "surname": "username",
                "email": "user_to_delete@gmail.com",
                "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq"
            }
        ]
        mockClient.query.mockResolvedValue(
            {
                rows: mock
            }
        )
        const result = await deleteUserByIdDB(3);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual(mock);
    })
})
describe("updateUserByIdDB", () => {
    test("Success", async () => {
        const mock = {
            "id": 4,
            "name": "user_updated",
            "surname": "username",
            "email": "user@gmail.com_updated",
            "pwd": "$2b$04$zY"
        }
        mockClient.query.mockResolvedValue(
            {
                rows: mock
            }
        )
        const result = await updateUserByIdDB(4, "user_updated", "username", "user@gmail.com_updated", "$2b$04$zY");
        expect(result).toEqual(mock);
        expect(mockClient.query).toHaveBeenCalled();
    })
})
