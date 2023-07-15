import {getCourseDB, getCourseByIdDB, createCourseDB} from '../repository/course.repository'
import { iCourse } from '../interfaces'

async function getCourse():Promise<iCourse[]>{
    const data = await getCourseDB();
    if(!data.length) throw new Error(`table 'courses' is empty`);
    return data
}
async function getCourseById(id):Promise<iCourse[]>{
    const data = await getCourseByIdDB(id);
    if(!data.length) throw new Error(`no such id`);
    return data
}

async function createCourse(course:string):Promise<iCourse[]>{
    const data = await createCourseDB(course);
    if(!data.length) throw new Error (`курс не сохранен`);
    return data;
}

export {getCourse, getCourseById, createCourse}