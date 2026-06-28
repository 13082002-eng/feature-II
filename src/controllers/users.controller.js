export const getProfile = (req, res) => {
  res.status(200).json({
    ok: true,
    user: req.user,
  });
};