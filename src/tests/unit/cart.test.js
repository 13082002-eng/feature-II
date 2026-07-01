import request from "supertest";
import app from "../../app.js";

describe("Cart endpoints", () => {
  test("Debe devolver 401 si no hay token", async () => {
    const response = await request(app)
      .get("/api/cart");

    expect(response.statusCode).toBe(401);
    expect(response.body.ok).toBe(false);
  });

  test("Debe devolver 401 al añadir un producto sin token", async () => {
    const response = await request(app)
      .post("/api/cart/items")
      .send({
        productId: "123",
        quantity: 1,
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.ok).toBe(false);
  });
});