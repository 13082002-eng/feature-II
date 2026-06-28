import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";

import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

import wishlistRoutes from "./routes/wishlist.routes.js";

import cartRoutes from "./routes/cart.routes.js";

import ordersRoutes from "./routes/orders.routes.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../swagger.json"),
    "utf8"
  )
);

// Seguridad
app.use(cors());
app.use(helmet());

// Limitador de peticiones
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 peticiones por IP
  message: {
    ok: false,
    message: "Demasiadas peticiones, inténtalo más tarde",
  },
});

// Limitador
app.use(limiter);

// Middleware para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(indexRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", ordersRoutes);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
// Middleware para rutas no encontradas
app.use(notFound);

// Middleware global de errores
app.use(errorHandler);

export default app;