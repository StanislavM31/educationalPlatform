import {createUserDB, getAllUsersDB, getUserByIdDB, deleteUserByIdDB, updateUserByIdDB} from '../repository/user.repository'
import {iUser} from '../interfaces/index'

async function createUser(name:string,surname:string,email:string,pwd:string):Promise<iUser[]>{
    const data = await createUserDB(name,surname,email,pwd);
    if(!data) throw new Error(`failed to save new user`)
    return data;
}
async function getAllUsers():Promise<iUser[]> {
    const data = await getAllUsersDB();
    if (!data.length) throw new Error(`table 'users' is empty`);
    return data
}
async function getUserById(id:number):Promise<iUser[]>{
    const data = await getUserByIdDB(id);
    if(!data.length) throw new Error (`no such id`);
    return data;
}
async function deleteUserById(id:number):Promise<iUser[]>{
    const data = await deleteUserByIdDB(id);
    if(!data.length) throw new Error (`no such id to delete`);
    return data;
}
async function updateUserById(id:number, name:string, surname:string, email:string, pwd:string):Promise<iUser[]>{
    const data = await updateUserByIdDB(id, name, surname, email, pwd );
    if(!data.length) throw new Error (`no such id to update`);
    return data;
}

export {createUser, getAllUsers, getUserById, deleteUserById, updateUserById}