import request from "supertest";
import app from "../../app.js";

describe("GET /api/products", () => {
  test("Debe devolver todos los productos", async () => {
    const response = await request(app)
      .get("/api/products");

    expect(response.statusCode).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});