
import test, { describe } from "node:test"
import { getCourse } from "./src/service/course.service"

describe('test_getCourse', ()=>{
    test("succes", ()=>{
        const result = getCourse();
        expect(result).toBe(`table 'courses' is empty`);
    })
    test("succes", ()=>{
        const result = getCourse();
        expect(result).toEqual([
            {
                "id": 1,
                "course": "javascript"
            },
            {
                "id": 3,
                "course": "c#"
            },
            {
                "id": 5,
                "course": "react"
            },
            {
                "id": 6,
                "course": "angular"
            },
            {
                "id": 4,
                "course": "testTEST_1 "
            },
            {
                "id": 7,
                "course": "angular"
            },
            {
                "id": 8,
                "course": "angular"
            },
            {
                "id": 9,
                "course": "angular"
            },
            {
                "id": 25,
                "course": "angular1"
            }
        ]);
    })
})