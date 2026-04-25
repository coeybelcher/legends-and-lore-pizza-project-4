import { useEffect, useState } from "react";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  // GET reviews
  useEffect(() => {
    fetch("http://localhost:3001/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // POST review
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        rating,
        comment
      })
    })
      .then((res) => res.json())
      .then((newReview) => {
        setReviews([newReview, ...reviews]);
        setName("");
        setRating("");
        setComment("");
      });
  };

  return (
    <div>
      <h1>Reviews</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Add Review</button>
      </form>

      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.name}</h3>
          <p>⭐ {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewsPage;