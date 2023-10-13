import express, {Request, Response} from 'express'
import {getCourse, getCourseById, createCourse, updateCourse, deleteCourseById} from '../service/course.service'
import buildResponse from '../helper/buildResponse';
import {isValidCourseBody, isValidId} from '../helper/validation';

const course = express.Router();

course.get('/', async (req:Request, res:Response)=>{
    try {
        const data = await getCourse();
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
})
course.get('/:id', async (req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const data = await getCourseById(id);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
})
course.delete('/:id', async (req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const data = await deleteCourseById(id);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
})
course.post('/', isValidCourseBody, async (req:Request, res:Response)=>{
    try {
        const {course, description} = req.body;
        const data = await createCourse(course, description);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
})
course.put('/:id', isValidCourseBody, isValidId, async(req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const {course, description} = req.body;
        const data = await updateCourse(id , course, description);
        return buildResponse(res, 200, data);
    } catch (error:any){
        buildResponse(res, 400, error.message)
    }
})

export default course ;