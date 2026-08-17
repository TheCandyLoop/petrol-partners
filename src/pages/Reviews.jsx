import ReviewCard from '../components/ReviewCard';
import { currentUser } from '../data/currentUser';
import { reviewsByDriver } from '../data/reviews';
import './Reviews.css';

function Reviews() {
  const reviews = reviewsByDriver[currentUser.id] || [];
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : currentUser.rating.toFixed(1);

  return (
    <div className="reviews-page">
      <div className="container reviews-content">
        <div className="reviews-heading">
          <h1>Reviews</h1>
          <p className="reviews-tagline">What fellow travellers have said about riding with you.</p>
        </div>

        <div className="reviews-summary card">
          <div className="reviews-summary-score">{averageRating}</div>
          <div>
            <div className="reviews-summary-stars">
              {'★'.repeat(Math.round(averageRating))}
              {'☆'.repeat(5 - Math.round(averageRating))}
            </div>
            <div className="reviews-summary-count">
              Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''} ·{' '}
              {currentUser.completedRides} rides completed
            </div>
          </div>
        </div>

        <div className="card reviews-list-card">
          {reviews.length > 0 ? (
            reviews.map((review, index) => <ReviewCard key={index} review={review} />)
          ) : (
            <p className="reviews-empty">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
