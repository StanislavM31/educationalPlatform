import {registrationDB, getByEmail} from '../repository/api.repository'
import { iUser } from '../interfaces';
import bcrypt from 'bcrypt';

async function registration(name:string, surname:string, email:string, pwd:string):Promise<iUser[]>{
    const salt = 3;
    const pwd_hashed = await bcrypt.hash(pwd, salt);
    const data = await getByEmail(email);
    if(data.length) throw new Error(`Такой email уже зарегестрирован`);
    const result = registrationDB(name, surname, email, pwd_hashed);
    return result;
}
async function authorizationUser(email:string, pwd:string){
    const userFound = await getByEmail(email);
    if(!userFound.length) throw new Error(`пользователя с таким email не существует`);
    const isMatch = await bcrypt.compare(pwd, userFound[0].pwd);
    if(!isMatch) throw new Error('пароли не совпадают. Авторизация невозможна');
    return `Авторизированный пользователь ${JSON.stringify(userFound)}`;
}
export {registration, authorizationUser}