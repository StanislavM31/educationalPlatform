import { getCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB } from '../repository/course.repository'
import { iCourse } from '../interfaces'

async function getCourse(): Promise<iCourse[]> {
    const data = await getCourseDB();
    if (!data.length) throw new Error(`table 'courses' is empty`);
    return data
}
async function getCourseById(id): Promise<iCourse[]> {
    const data = await getCourseByIdDB(id);
    if (!data.length) throw new Error(`no such id`);
    return data
}
async function deleteCourseById(id): Promise<iCourse[]> {
    const data = await deleteCourseByIdDB(id);
    if (!data.length) throw new Error(`no such id to delete`);
    return data
}

async function createCourse(course: string): Promise<iCourse[]> {
    let array:iCourse[] = await getCourse();
    array.forEach(element => {
        console.log(element);
        console.log(course);
        if (element.course == course) throw new Error(`this course already exists`);
    });
    const data = await createCourseDB(course);
    if(!data.length) throw new Error(`failed to save course`)
    return data;
}
async function updateCourse(course: string, id: number): Promise<iCourse[]> {
    const data = await updateCourseDB(id, course);
    if (!data.length) throw new Error(`no such id to update`)
    return data;
}

export { getCourse, getCourseById, createCourse, updateCourse, deleteCourseById }