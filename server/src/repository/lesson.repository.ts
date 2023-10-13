import pool from "../db";

async function createLessonDB(title:string, courseId:number){
    console.log(title, courseId);

    const client = await pool.connect();
    const sql = `INSERT INTO lessons(title, courseId) VALUES ($1, $2) RETURNING * `;
    const data = (await client.query(sql,[title, courseId])).rows;
    await client.release();
    return data;
}
async function updateLessonDB(title:string, courseId:number, id:number){
    const client = await pool.connect();
    const sql = `UPDATE lessons SET title=$1, courseId=$2  WHERE id=$3 RETURNING * `;
    const data = (await client.query(sql,[title, courseId, id])).rows;
    await client.release();
    return data;
}
async function getLessonByCourseIdDB(courseId:number){
    const client = await pool.connect();
    const sql = `SELECT * FROM lessons WHERE courseId=$1 `;
    const data = (await client.query(sql,[courseId])).rows;
    await client.release();
    return data;
}
async function deleteLessonDB(id:number){
    const client = await pool.connect();
    const sql = `DELETE FROM lessons WHERE id=$1 RETURNING *`;
    const data = (await client.query(sql,[id])).rows;
    await client.release();
    return data;
}

export {createLessonDB, updateLessonDB, getLessonByCourseIdDB, deleteLessonDB}