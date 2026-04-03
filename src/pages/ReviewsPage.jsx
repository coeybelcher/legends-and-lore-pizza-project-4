import { useApp } from "../context/AppContext";
import ReviewForm from "../components/ReviewForm";

export default function ReviewsPage() {
  const { reviews } = useApp();

  return (
    <div>
      <h2>Reviews</h2>
      <ReviewForm />
      {reviews.map((r) => (
        <div key={r.id}>
          <h3>{r.name}</h3>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}