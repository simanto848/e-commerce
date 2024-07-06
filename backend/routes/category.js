const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../app/controllers/categoryController");
const authToken = require("../app/middleware/authToken");

const router = express.Router();

router.post("/", authToken, createCategory);
router.get("/all", getAllCategories);
router.get("/:categoryId", getCategoryById);
router.put("/update/:categoryId", authToken, updateCategory);
router.delete("/remove/:categoryId", authToken, deleteCategory);

module.exports = router;
