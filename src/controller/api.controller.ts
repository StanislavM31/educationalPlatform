import express, {Request, Response} from 'express';
import buildResponse from '../helper/buildResponse';
import {registration, authorizationUser} from '../service/api.service';
const api = express.Router();

api.post('/registration', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{name, surname, email, pwd} = req.body;
        const data = await registration(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
api.post('/auth', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{name, surname, email, pwd} = req.body;
        const data = await authorizationUser(email, pwd);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})

export default api ;