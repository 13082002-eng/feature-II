import "dotenv/config";

// Importamos el archivo app.js
import app from "./app.js";
import connectMongo from "./config/mongo.js";

const PORT = process.env.PORT || 3000;

// Comprobamos que existe JWT_SECRET
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET no está definido");
}

// Función para arrancar el servidor
const startServer = async () => {
  try {
    // Conectamos a MongoDB
    await connectMongo();

    // Arrancamos el servidor
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error al arrancar el servidor:", error);
    process.exit(1);
  }
};

startServer();