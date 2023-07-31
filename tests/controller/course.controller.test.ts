import request from 'supertest'
import app from "../../src/app"

let id;

test('POST', async () => {
    const res = await request(app).post('/course').send({course: "javascript"})
    /*     console.log('============');
        console.log(res);
        console.log('============'); */
    id = res.body[0].id;
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
})

test('GET', async () => {
    const res = await request(app).get('/course');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(1);
})

test('Get/:id', async () => {
    const res = await request(app).get(`/course/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('Update', async ()=>{
    const res = await request(app).put(`/course/${id}`).send({course: "javascript_updated"})
    expect(res.status).toBe(200);
    console.log(res.body);

    expect(res.body).toEqual([{id: id, course:"javascript_updated"}]);
    expect(res.body.length).toBe(1);
})

test('DELETE', async ()=>{
    const res = await request(app).delete(`/course/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: id, course: 'javascript_updated' }]);
    expect(res.body.length).toBe(1)
})