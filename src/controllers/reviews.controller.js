import * as reviewService from "../services/reviews.service.js";

export const getProductReviews = async (req, res, next) => {
  try {
    const reviews = await reviewService.getReviewsByProduct(
      req.params.id
    );

    res.json({
      ok: true,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

export const createProductReview = async (req, res, next) => {
  try {
    const review = await reviewService.createReview(
      req.params.id,
      req.user.userId,
      req.body
    );

    res.status(201).json({
      ok: true,
      data: review,
    });
  } catch (error) {
    next(error);
  }
};