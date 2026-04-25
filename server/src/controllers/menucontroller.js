const pool = require("../db/pool");

const getMenu = async (req, res) => {
  const result = await pool.query("SELECT * FROM menu_items ORDER BY id");
  res.json(result.rows);
};

const addMenuItem = async (req, res) => {
  const { name, price } = req.body;

  const result = await pool.query(
    "INSERT INTO menu_items (name, price) VALUES ($1, $2) RETURNING *",
    [name, price]
  );

  res.status(201).json(result.rows[0]);
};

const deleteMenuItem = async (req, res) => {
  const id = req.params.id;

  await pool.query("DELETE FROM menu_items WHERE id = $1", [id]);

  res.json({ message: "Deleted" });
};

const updateMenuItem = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;

  await pool.query(
    "UPDATE menu_items SET name = $1, price = $2 WHERE id = $3",
    [name, price, id]
  );

  res.json({ message: "Updated" });
};

module.exports = {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem
};