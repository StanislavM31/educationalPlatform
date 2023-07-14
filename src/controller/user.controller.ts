import express from 'express';
import {createUser, getAllUsers} from '../service/user.service'
const route = express.Router();

route.get('/', async (req,res)=>{
    try {
        const data = await getAllUsers();
        res.send(data);
    } catch (error:any) {
        res.send(error.message)
    }
})

route.post('/', async (req,res)=>{
    try {
        const {name,surname,email,pwd} = req.body;
        const data = await createUser(name,surname,email,pwd);
        res.send(data);
    } catch (error:any) {
        res.send(error.message);
    }
})
export default route;
