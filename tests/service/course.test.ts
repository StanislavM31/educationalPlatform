import { createCourse, deleteCourseById, getCourse, getCourseById, updateCourse } from "../../src/service/course.service"
import * as repository from '../../src/repository/course.repository'
import exp from "constants";

describe('createCourse function', () => {
    test('Success', async () => {
        const funcRepo = jest.spyOn(repository, 'createCourseDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'test_course' }]);
        const result = await createCourse('test_course');

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: "test_course" }]);
        expect(result).toHaveLength(1);
    })
    test('error', async ()=>{
        const functRepo = jest.spyOn(repository, "createCourseDB");
        functRepo.mockResolvedValue([]);
        try {
            const result = await createCourse('test_course_1');
        } catch (error:any) {
            expect(functRepo).toHaveBeenCalled();
            expect(error.message).toBe('failed to save course')
        }
    })
    test('error', async ()=>{
        const functRepo = jest.spyOn(repository, "getCourseDB");
        functRepo.mockResolvedValue([]);
        try {
            await getCourse();
        } catch (error:any) {
            expect(functRepo).toHaveBeenCalled();
            expect(error.message).toBe(`table 'courses' is empty`)
        }
    })
})

describe('getCourse', () => {
    test("Success", async () => {
        const funcRepo = jest.spyOn(repository, "getCourseDB");
        funcRepo.mockResolvedValue([{ id: 1, course: "course1" }, { id: 2, course: "course2" }, { id: 3, course: "course3" }]);

        const result = await getCourse();
        expect(funcRepo).toHaveBeenCalled(); //проверка, что что функция вызывалась
        expect(result).toEqual([{ id: 1, course: "course1" }, { id: 2, course: "course2" }, { id: 3, course: "course3" }]);
        expect(result.length).toBeGreaterThan(0);
    })
})

describe("getCourseById function", () => {
    test('Success', async () => {
        const funcRepo = jest.spyOn(repository, "getCourseByIdDB");
        funcRepo.mockResolvedValue([{ id: 1, course: "test_course" }])//предполагаемый возвращаемый результат
        const result = await getCourseById(1);
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: "test_course" }]);
        expect(result.length).toBeGreaterThan(0);
    })
})

describe("updateCourse function", ()=>{
    test("Success", async ()=>{
        const funcRepo = jest.spyOn(repository, "updateCourseDB");
        funcRepo.mockResolvedValue([{id:1, course:"course_updated"}]);
        const result = await updateCourse("course", 1 );
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{id:1, course:"course_updated"}]);
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].course).toBe("course_updated");
    })
})

describe("deleteCourseById function", ()=>{
    test("Success", async ()=>{
        const funcRepo = jest.spyOn(repository,"deleteCourseByIdDB");
        funcRepo.mockResolvedValue([{id:1, course:"course_1_to_delete"}]);
        const result = await deleteCourseById(1);
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{id:1, course:"course_1_to_delete"}]);
        expect(result.length).toBeGreaterThan(0);
    })
})