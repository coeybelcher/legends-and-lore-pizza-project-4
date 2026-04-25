const express = require("express");
const cors = require("cors");

const menuRoutes = require("./src/routes/menuRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🔥" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});