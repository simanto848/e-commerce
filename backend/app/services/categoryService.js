const {
  getByKeyword,
  simpleGetAll,
  store,
  update,
  destroy,
} = require("./CrudService");

const tableName = "categories";

exports.getAllCategories = async () => {
  return await simpleGetAll(tableName);
};

exports.getCategoryById = async (cateogoryId) => {
  return await getByKeyword(tableName, "id", cateogoryId);
};

exports.createCategory = async (payload) => {
  return await store(tableName, payload);
};

exports.updateCategory = async (payload, categoryId) => {
  return await update(tableName, payload, categoryId);
};

exports.deleteCategory = async (categoryId) => {
  return await destroy(tableName, categoryId);
};
