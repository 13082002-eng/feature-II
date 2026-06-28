import * as cartService from "../services/cart.service.js";

export const getCart = async (req, res, next) => {
  try {
    const cart = await cartService.getOrCreateCart(
      req.user.userId
    );

    res.json({
      ok: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const addItem = async (req, res, next) => {
  try {
    const item = await cartService.addItemToCart(
      req.user.userId,
      req.body.productId,
      req.body.quantity
    );

    res.status(201).json({
      ok: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

export const removeItem = async (req, res, next) => {
  try {
    await cartService.removeItemFromCart(
      req.params.itemId
    );

    res.json({
      ok: true,
      message: "Producto eliminado del carrito",
    });
  } catch (error) {
    next(error);
  }
};