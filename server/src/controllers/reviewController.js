const pool = require("../db/pool");

const getReviews = async (req, res) => {
  const result = await pool.query("SELECT * FROM reviews ORDER BY id DESC");
  res.json(result.rows);
};

const addReview = async (req, res) => {
  const { name, rating, comment } = req.body;

  const result = await pool.query(
    "INSERT INTO reviews (name, rating, comment) VALUES ($1, $2, $3) RETURNING *",
    [name, rating, comment]
  );

  res.status(201).json(result.rows[0]);
};

module.exports = { getReviews, addReview };