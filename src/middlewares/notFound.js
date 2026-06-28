const notFound = (req, res) => {
  res.status(404).json({
    ok: false,
    error: {
      message: "Route not found"
    }
  });
};

export default notFound;