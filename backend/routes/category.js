const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../app/controllers/categoryController");

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:categoryId", getCategoryById);
router.put("/update/:categoryId", updateCategory);
router.delete("/remove/:categoryId", deleteCategory);

module.exports = router;
