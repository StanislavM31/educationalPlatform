import pool from '../db'
import { iUser } from '../interfaces/index'

async function getAllUsersDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    await client.release();
    return result;
}
async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO users (name,surname,email,pwd) VALUES ($1,$2,$3,$4) RETURNING *`;
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        await client.release();
        return []
    }
}
async function getUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `SELECT * FROM users WHERE id = $1`;
        const result = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    }
}
async function deleteUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `DELETE FROM users WHERE id = $1 RETURNING *`;
        const result = (await client.query(sql, [id])).rows;
        await client.query("COMMIT")
        return result;
    } catch (error) {
        await client.release();
        await client.query('ROLLBACK');
        return [];
    }
}
async function updateUserByIdDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `UPDATE users SET name = $1, surname = $2, email=$3, pwd=$4 WHERE id = $5 RETURNING *`;
        const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        await client.release();
        return [];
    }
}
export { createUserDB, getAllUsersDB, getUserByIdDB, deleteUserByIdDB, updateUserByIdDB }