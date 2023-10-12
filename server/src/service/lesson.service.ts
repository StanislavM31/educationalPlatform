import {createLessonDB, updateLessonDB, getLessonByCourseIdDB, deleteLessonDB} from '../repository/lesson.repository';

async function createLesson(title:string, courseId:number){
    const data = await createLessonDB(title, courseId);
    return data;
}
async function updateLesson(title:string, courseId:number, id:number){
    const data = await updateLessonDB(title, courseId, id);
    return data;
}
async function getLessonByCourseId(courseId:number){
    const data = await getLessonByCourseIdDB(courseId);
    return data;
}
async function deleteLesson(id:number){
    const data = await deleteLessonDB(id);
    return data;
}

export {createLesson, updateLesson, getLessonByCourseId, deleteLesson}