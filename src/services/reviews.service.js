import Review from "../models/review.model.js";

export const getReviewsByProduct = async (productId) => {
  return await Review.find({ productId });
};

export const createReview = async (productId, userId, data) => {
  const { rating, comment } = data;

  const review = await Review.create({
    productId,
    userId,
    rating,
    comment,
  });

  return review;
};