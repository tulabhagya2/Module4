const express = require("express");
require("dotenv").config();

// Import routes correctly
const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
