import { Router } from "express";

import authenticate from "../middlewares/authenticate.js";

import {
  getCart,
  addItem,
  removeItem,
} from "../controllers/cart.controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  getCart
);

router.post(
  "/items",
  authenticate,
  addItem
);

router.delete(
  "/items/:itemId",
  authenticate,
  removeItem
);

export default router;