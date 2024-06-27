const db = require("../../config/dbConfig");

const simpleGetAll = (tableName) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tableName}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getAllByJoin = (query) => {
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getByKeyword = (tableName, keyword, value) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM ${tableName} WHERE ${keyword} = ?`,
      value,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const store = (tableName, payload) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO ${tableName} SET ?`, payload, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const update = (tableName, payload, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE ${tableName} SET ? WHERE id = ?`,
      [payload, id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const destroy = (tableName, id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  simpleGetAll,
  getAllByJoin,
  getByKeyword,
  store,
  update,
  destroy,
};
