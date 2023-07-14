import pool from '../db'

async function getAllDb(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;
}
async function createUserDB(name,surname,email,pwd){
    const client = await pool.connect();
    const sql = `INSERT INTO users (name,surname,email,pwd) VALUES ($1,$2,$3,$4) RETURNING *`;
    const result = (await client.query(sql,[name,surname,email,pwd])).rows;
    return result;
}

export {createUserDB, getAllDb}