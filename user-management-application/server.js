const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
