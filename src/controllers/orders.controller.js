import * as orderService from "../services/orders.service.js";

export const checkout = async (req, res, next) => {
  try {
    const order = await orderService.checkout(
      req.user.userId
    );

    res.status(201).json({
      ok: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};