const request = require("supertest");

const app = require("./app");

describe("Express Application", () => {
    test("GET / returns healthy application", async () => {
        const response = await request(app).get("/");
        
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("GET /health returns healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("Unknown route returns 404", async () => {
        const response = await request(app).get("/invalid-route");

        expect(response.statusCode).toBe(404);
    });
});
