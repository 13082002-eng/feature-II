const errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    ok: false,
    error: {
      message: err.message || "Internal Server Error"
    }
  });
};

export default errorHandler;