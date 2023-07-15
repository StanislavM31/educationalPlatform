import express, {Request, Response} from 'express';
import {createUser, getAllUsers, getUserById, deleteUserById, updateUserById} from '../service/user.service'
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req:Request,res:Response):Promise<void>=>{
    try {
        const data = await getAllUsers();
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})

route.post('/', async (req,res):Promise<void>=>{
    try {
        const {name,surname,email,pwd} = req.body;
        const data = await createUser(name,surname,email,pwd);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
route.put('/:id', async (req,res):Promise<void>=>{
    try {
        const {name,surname,email,pwd} = req.body;
        const {id} = req.params;
        const data = await updateUserById(id, name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
route.delete('/:id', async (req,res):Promise<void>=>{
    try {
        const {id} = req.params;
        const data = await deleteUserById(id);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
route.get('/:id', async(req,res):Promise<void>=>{
    try {
        const {id} = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message);
    }
})
export default route;
