import { Router } from "express";

import authenticate from "../middlewares/authenticate.js";

import {
  getMyWishlist,
  addProduct,
  removeProduct,
} from "../controllers/wishlist.controller.js";

const router = Router();

// Todas las rutas requieren autenticación
router.use(authenticate);

// Obtener wishlist del usuario
router.get("/", getMyWishlist);

// Añadir producto a wishlist
router.post(
  "/:productId",
  addProduct
);

// Eliminar producto de wishlist
router.delete(
  "/:productId",
  removeProduct
);

export default router;