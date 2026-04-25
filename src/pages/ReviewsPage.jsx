import { useEffect, useState } from "react";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://legends-and-lore-pizza-project-4.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.name}</h2>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewsPage;