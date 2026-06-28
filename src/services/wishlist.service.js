import Wishlist from "../models/wishlist.model.js";

// Obtener la wishlist del usuario autenticado
export const getWishlist = async (userId) => {
  // Buscamos la wishlist del usuario
  let wishlist = await Wishlist.findOne({ userId });

  // Si no existe, devolvemos una lista vacía
  if (!wishlist) {
    return {
      userId,
      products: [],
    };
  }

  return wishlist;
};

// Añadir un producto a la wishlist
export const addProductToWishlist = async (
  userId,
  productId
) => {

  // Buscamos la wishlist del usuario
  let wishlist = await Wishlist.findOne({ userId });

  // Si no existe, la creamos
  if (!wishlist) {
    wishlist = await Wishlist.create({
      userId,
      products: [productId],
    });

    return wishlist;
  }

  // Comprobamos que el producto no esté repetido
  if (!wishlist.products.includes(productId)) {
    wishlist.products.push(productId);

    // Guardamos cambios
    await wishlist.save();
  }

  return wishlist;
};

// Eliminar un producto de la wishlist
export const removeProductFromWishlist = async (
  userId,
  productId
) => {

  // Buscamos la wishlist
  const wishlist = await Wishlist.findOne({ userId });

  // Si no existe lanzamos error
  if (!wishlist) {
    throw new Error("Wishlist no encontrada");
  }

  // Eliminamos el producto
  wishlist.products = wishlist.products.filter(
    (id) => id !== productId
  );

  // Guardamos cambios
  await wishlist.save();

  return wishlist;
};