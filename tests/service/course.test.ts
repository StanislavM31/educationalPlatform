import { createCourse } from "../../src/service/course.service"
import * as repository from '../../src/repository/course.repository'
describe('test_getCourse', () => {
    test('Succes', async () => {
        const funcRepo = jest.spyOn(repository, 'createCourseDB');
        funcRepo.mockResolvedValue([{ id: 1, course: " test_course" }]);
        const result = await createCourse('course');
        expect(funcRepo).toHaveBeenCalled();
    })
})