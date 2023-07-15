import express, {Request, Response, NextFunction} from 'express'
import {getCourse, getCourseById} from '../service/course.service'
import buildResponse from '../helper/buildResponse';

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

export default course ;