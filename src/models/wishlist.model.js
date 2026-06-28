import mongoose from "mongoose";

// Esquema de la lista de deseos
const wishlistSchema = new mongoose.Schema(
  {
    // Usuario propietario de la wishlist
    userId: {
      type: String,
      required: true,
    },

    // Lista de productos guardados
    products: [
      {
        type: String,
      },
    ],
  },
  {
    // Añade automáticamente createdAt y updatedAt
    timestamps: true,
  }
);

// Exportamos el modelo
export default mongoose.model("Wishlist", wishlistSchema);