const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
