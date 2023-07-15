import pool from "../db"
import {iCourse} from "../interfaces/index"

async function getCourseDB():Promise<iCourse[]>{
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`;
    const result = (await client.query(sql)).rows;
    return result;
}

async function getCourseByIdDB(id):Promise<iCourse[]>{
    const client = await pool.connect();
    const sql = `SELECT * FROM courses WHERE id=$1`;
    const data = (await client.query(sql,[id])).rows;
    return data;
}
async function deleteCourseByIdDB(id):Promise<iCourse[]>{
    const client = await pool.connect();
    const sql = `DELETE FROM courses WHERE id=$1 RETURNING *`;
    const data = (await client.query(sql,[id])).rows;
    return data;
}
async function createCourseDB(course:string):Promise<iCourse[]>{
    const client = await pool.connect();
    const sql = `INSERT INTO courses (course) VALUES ($1) RETURNING *`;
    const data = (await client.query(sql,[course])).rows;
    return data;
}
export {getCourseDB, getCourseByIdDB, createCourseDB, deleteCourseByIdDB}