import {createUserDB, getAllDb} from '../repository/user.repository'

async function createUser(name:string,surname:string,email:string,pwd:string){
    const data = await createUserDB(name,surname,email,pwd);
    if(!data) throw new Error(`empty user`)
    return data;
}
async function getAllUsers() {
    const data = await getAllDb();
    return data
}

export {createUser, getAllUsers}