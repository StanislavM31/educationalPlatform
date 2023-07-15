import pool from '../db'
import { iUser } from '../interfaces/index'

async function getAllUsersDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;
}
async function createUserDB(name:string, surname:string, email:string, pwd:string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `INSERT INTO users (name,surname,email,pwd) VALUES ($1,$2,$3,$4) RETURNING *`;
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}
async function getUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
}
async function deleteUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const result = (await client.query(sql, [id])).rows;
    console.log(result);

    return result;
}
async function updateUserByIdDB(id: number, name:string, surname:string, email:string, pwd:string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `UPDATE users SET name = $1, surname = $2, email=$3, pwd=$4 WHERE id = $5 RETURNING *`;
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result;
}
export { createUserDB, getAllUsersDB, getUserByIdDB, deleteUserByIdDB, updateUserByIdDB }