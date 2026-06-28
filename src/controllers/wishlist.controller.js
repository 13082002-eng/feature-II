import * as wishlistService from "../services/wishlist.service.js";

// Obtener wishlist del usuario
export const getMyWishlist = async (
  req,
  res,
  next
) => {
  try {

    const wishlist =
      await wishlistService.getWishlist(
        req.user.userId
      );

    res.json({
      ok: true,
      data: wishlist,
    });

  } catch (error) {
    next(error);
  }
};

// Añadir producto
export const addProduct = async (
  req,
  res,
  next
) => {
  try {

    const wishlist =
      await wishlistService.addProductToWishlist(
        req.user.userId,
        req.params.productId
      );

    res.status(201).json({
      ok: true,
      data: wishlist,
    });

  } catch (error) {
    next(error);
  }
};

// Eliminar producto
export const removeProduct = async (
  req,
  res,
  next
) => {
  try {

    const wishlist =
      await wishlistService.removeProductFromWishlist(
        req.user.userId,
        req.params.productId
      );

    res.json({
      ok: true,
      data: wishlist,
    });

  } catch (error) {
    next(error);
  }
};