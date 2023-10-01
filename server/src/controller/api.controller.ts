import express, {Request, Response} from 'express';
import buildResponse from '../helper/buildResponse';
import {registration, authorizationUser} from '../service/api.service';
import {deleteUserById} from '../service/user.service'
import {getUserById} from '../service/user.service'
import {createToken } from "../helper/jwt";

const api = express.Router();

api.post('/registration', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{name, surname, email, pwd} = req.body;
        const data = await registration(name, surname, email, pwd);
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly:false, //разрешаем работу в браузере
            secure:true,
        });
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
api.delete('/registration/:id', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{id} = req.params;
        const data = await deleteUserById(Number(id));
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
api.post('/auth', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{name, surname, email, pwd} = req.body;
        const data = await authorizationUser(email, pwd);
        const token = createToken(data);
        res.cookie('access_token', token, {
            httpOnly:false, //разрешаем работу в браузере
            secure:true,
        });
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
api.get('/registration/:id', async (req:Request, res:Response):Promise<void>=>{
    try {
        const{id} = req.params;
        const data = await getUserById(Number(id));
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})

export default api ;