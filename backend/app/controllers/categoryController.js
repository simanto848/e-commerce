const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await getCategoryById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json({ category });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    if (
      req.user.user_type !== "super admin" ||
      req.user.user_type !== "admin"
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      if (!name || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const data = { name, description };

      await createCategory(data);
      return res.status(201).json({ message: "Category created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;

    if (
      req.user.user_type !== "super admin" ||
      req.user.user_type !== "admin"
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      if (!name || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const data = { name, description };

      await updateCategory(data, categoryId);
      return res.status(200).json({ message: "Category updated successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    if (
      req.user.user_type !== "super admin" ||
      req.user.user_type !== "admin"
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      await deleteCategory(categoryId);
      return res.status(200).json({ message: "Category deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
