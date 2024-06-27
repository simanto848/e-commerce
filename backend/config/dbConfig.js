const mysql = require("mysql");
require("dotenv").config();

const dbConfig = {
  database: process.env.DATABASE_Name,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database: ", err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = db;
