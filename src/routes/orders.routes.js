import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import { checkout } from "../controllers/orders.controller.js";

const router = Router();

router.post(
  "/checkout",
  authenticate,
  checkout
);

export default router;