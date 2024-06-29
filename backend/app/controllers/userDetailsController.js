exports.userDetailsController = async (req, res) => {
  try {
    return res.status(200).json({
      message: "User Details",
      userId: req.userId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
