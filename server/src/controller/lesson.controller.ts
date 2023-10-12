import express, {Request, Response} from 'express';
import buildResponse from '../helper/buildResponse';
import {createLesson, updateLesson, getLessonByCourseId, deleteLesson } from "../service/lesson.service";
const route = express.Router();

route.post('/', async(req:Request, res:Response):Promise<void>=>{
    try {
        const{title, courseId} = req.body;
        const data = await createLesson(title, courseId);
        buildResponse(res, 200, data)
    } catch (error:any) {
        buildResponse(res, 200, error.message);
    }
})
route.put('/:id', async(req:Request, res:Response):Promise<void>=>{
    try {
        const{title, courseId} = req.body; //title idCourse(js)
        const{id} = req.params; //lesson
        const data = await updateLesson(title, courseId, Number(id));
        buildResponse(res, 200, data)
    } catch (error:any) {
        buildResponse(res, 200, error.message);
    }
})
route.get('/:courseId', async(req:Request, res:Response):Promise<void>=>{
    try {
        const{courseId} = req.params;
        console.log("req.params:",req.params);

        const data = await getLessonByCourseId(Number(courseId));
        buildResponse(res, 200, data)
    } catch (error:any) {
        buildResponse(res, 200, error.message);
    }
})
route.delete('/:id', async(req:Request, res:Response):Promise<void>=>{
    try {
        const{id} = req.params;
        const data = await deleteLesson(Number(id));
        buildResponse(res, 200, data)
    } catch (error:any) {
        buildResponse(res, 200, error.message);
    }
})

export default route