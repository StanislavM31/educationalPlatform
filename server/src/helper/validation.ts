import {Request, Response, NextFunction} from 'express';

function isValidCourseBody(req:Request, res:Response, next:NextFunction){
    const { course} = req.body;
    if(!course.trim()) throw new Error(`course не может быть пустым`)
    if(!isNaN(course)) throw new Error(`поле course должно быть строкой`)
    next()
}
function isValidId(req:Request, res:Response, next:NextFunction){
    const{id} = req.params;
    if(+id<=0 ) throw new Error(`неверный формат id`);
    next();
}
export {isValidCourseBody, isValidId};