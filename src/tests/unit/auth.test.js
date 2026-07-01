import request from "supertest";
import app from "../../app.js";

describe("Auth endpoints", () => {
  test("Debe registrar un usuario", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        email: `test${Date.now()}@test.com`,
        password: "12345678",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe(
      "Usuario registrado correctamente"
    );
  });

  test("Debe devolver error si las credenciales son inválidas", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "noexiste@test.com",
        password: "12345678",
      });

    expect(response.statusCode).toBe(500);
    expect(response.body.ok).toBe(false);
  });
});