import { Router } from "express";

const router = Router();

//Endpoint para verificar que el servidor funciona correctamente
router.get("/health", (req, res) => {
  res.json({
    ok: true,
    data: {
      status: "OK"
    }
  });
});

export default router;