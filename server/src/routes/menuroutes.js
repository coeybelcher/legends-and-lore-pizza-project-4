const express = require("express");
const router = express.Router();

const {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem
} = require("../controllers/menuController");

router.get("/", getMenu);
router.post("/", addMenuItem);
router.delete("/:id", deleteMenuItem);
router.put("/:id", updateMenuItem);

module.exports = router;