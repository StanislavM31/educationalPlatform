import { getCourseDB } from '../../src/repository/course.repository'

const mockClient = {
    query: jest.fn()
}

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => mockClient)
            }
        })
    }
})

describe("getAllUSerDB_function", () => {
    test('success', async () => {
        const mockUser = [{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }]

        mockClient.query.mockResolvedValue({rows: mockUser})
        const result  = await getCourseDB();

        expect(result).toEqual(mockUser);
    })
})

