import { getCourseDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseByIdDB } from '../../src/repository/course.repository'


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

afterEach(()=>{
    jest.clearAllMocks();
})

describe("getCourseDB_function", () => {
    test('success', async () => {
        const mockCourse = [{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }]

        mockClient.query.mockResolvedValue({ rows: [{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }] })
        const result = await getCourseDB();

        expect(result).toEqual([{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }]);
    })

})

describe("createCourseDB_function", () => {
    test("success", async () => {
        const mockCourse = [{ id: 1, course: "new_course" }];

        mockClient.query.mockResolvedValue({ rows: mockCourse });
        const result = await createCourseDB("new_course");

        expect(result).toEqual(mockCourse);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
    })
})

describe("getCourseByIdDB_function", () => {
    test("succes", async () => {
        const mockCourse = [{ id: 7, course: " javascript" }];

        mockClient.query.mockResolvedValue({ rows: mockCourse });
        const result = await getCourseByIdDB(7);

        expect(result).toEqual(mockCourse);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
    })
})

describe("updateCourseDB", ()=>{
    test("success", async ()=>{
        const mockCourseUpdated = [{id:1, course:"updated_course"}]
        mockClient.query.mockResolvedValue({rows:mockCourseUpdated})
        const result = await updateCourseDB(1, "course_to_update");

        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual(mockCourseUpdated);
        expect(result.length).toBe(1);
    })
})

describe("deleteCourseDB_function", ()=>{
    test("Success", async ()=>{
        const mockDelete = [{id:1, course:"course_to_delete"}];
        mockClient.query.mockResolvedValue({rows:mockDelete});
        const result = await deleteCourseByIdDB(1);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual(mockDelete);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
    })
})

