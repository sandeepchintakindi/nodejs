import request from "supertest";
import app from "../src/app";


describe("POST /api/v1/pass", () => {
    let payload  = { "data": "JOHN0000MICHAEL0009994567" };
    let expected  = 
        {
            "statusCode": 200,
            "data": {
                "firstName": "JOHN0000",
                "lastName": "MICHAEL000",
                "clientId": "9994567"
            }
        };
    it("should return a valid json response",  (done) => {
     return request(app).post("/api/v1/parse").send(payload).then(res => {
        expect(res.body.statusCode).toEqual(200);
        expect(res.body).toEqual(expected);
        done();
     });
    });
});

describe("POST /api/v2/pass", () => {
    let payload  = { "data": "JOHN0000MICHAEL0009994567" };
    let expected  = 
        {
            "statusCode": 200,
            "data": {
                "firstName": "JOHN",
                "lastName": "MICHAEL",
                "clientId": "999-4567"
            }
        };
    it("should return a valid json response",  (done) => {
     return request(app).post("/api/v2/parse").send(payload).then(res => {
        expect(res.body.statusCode).toEqual(200);
        expect(res.body).toEqual(expected);
        done();
     });
    });
});

describe("POST /api/v2/pass 500 response", () => {
    let payload  = { "data1": "JOHN0000MICHAEL0009994567" };
    let expected  = 
        {
            "statusCode": 500,
            "data": "Something went wrong !"
        };
    it("should return a valid json response",  (done) => {
     return request(app).post("/api/v2/parse").send(payload).then(res => {
        expect(res.body.statusCode).toEqual(500);
        expect(res.body).toEqual(expected);
        done();
     });
    });
});