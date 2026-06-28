const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || price === undefined || price < 0) {
    return res.status(400).json({
      ok: false,
      error: {
        message: "Name and valid price are required"
      }
    });
  }

  next();
};

export default validateProduct;