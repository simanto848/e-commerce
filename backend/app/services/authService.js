const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/dbConfig");
const { store } = require("../services/CrudService");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const checkEmailExists = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, email, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const registerUser = async (data) => {
  await store("users", data);
};

module.exports = {
  hashPassword,
  checkEmailExists,
  registerUser,
  comparePassword,
  generateToken,
};
