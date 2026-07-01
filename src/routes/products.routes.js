import { Router } from "express";

import {
  getProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct
} from "../controllers/products.controller.js";

import authenticate from "../middlewares/authenticate.js";
import requireRole from "../middlewares/requireRole.js";

import {
  getProductReviews,
  createProductReview,
} from "../controllers/reviews.controller.js";

import upload from "../middlewares/upload.js";

const router = Router();

// Obtener todos los productos (Público)
router.get("/", getProducts);

// Obtener producto por ID (Público)
router.get("/:id", getProduct);

// Listar reviews de un producto
router.get("/:id/reviews", getProductReviews);

// Crear review (requiere login)
router.post(
  "/:id/reviews",
  authenticate,
  createProductReview
);

// Crear producto (Solo ADMIN)
router.post(
  "/",
  authenticate,
  requireRole("ADMIN"),
  upload.single("image"),
  createNewProduct
);

// Actualizar producto (Solo ADMIN)
router.put(
  "/:id",
  authenticate,
  requireRole("ADMIN"),
  updateExistingProduct
);

// Eliminar producto (Solo ADMIN)
router.delete(
  "/:id",
  authenticate,
  requireRole("ADMIN"),
  deleteExistingProduct
);

export default router;