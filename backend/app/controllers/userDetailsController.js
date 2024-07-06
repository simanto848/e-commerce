const db = require("../../config/dbConfig");

exports.userDetailsController = async (req, res) => {
  try {
    return res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    console.log(req.user);
    const id = req.params.userId;
    const sql = `SELECT * FROM users WHERE id = ?`;

    db.query(sql, id, (err, result) => {
      if (err) {
        return res.status(400).json({
          message: "Error in SQL Query",
        });
      }
      if (result.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json(result);
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
