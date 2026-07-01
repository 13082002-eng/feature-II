import request from "supertest";
import app from "../../app.js";

describe("Wishlist endpoints", () => {
  test("Debe devolver 401 si no hay token", async () => {
    const response = await request(app)
      .get("/api/wishlist");

    expect(response.statusCode).toBe(401);
    expect(response.body.ok).toBe(false);
  });
});