import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <span className="review-card-reviewer">{review.reviewer}</span>
        <span className="review-card-rating">
          {'★'.repeat(review.rating)}
          {'☆'.repeat(5 - review.rating)}
        </span>
      </div>
      <p className="review-card-comment">{review.comment}</p>
      <div className="review-card-meta">
        {review.trip} · {review.date}
      </div>
    </div>
  );
}

export default ReviewCard;
