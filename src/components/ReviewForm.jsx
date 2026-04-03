import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function ReviewForm() {
  const { addReview } = useApp();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();

    addReview({
      name,
      comment,
      rating
    });

    setName("");
    setComment("");
    setRating(5);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select value={rating} onChange={e => setRating(Number(e.target.value))}>
        <option value={5}>5 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={2}>2 Stars</option>
        <option value={1}>1 Star</option>
      </select>

      <textarea
        placeholder="Comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />

      <button>Add Review</button>
    </form>
  );
}