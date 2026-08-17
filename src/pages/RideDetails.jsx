import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { rides } from '../data/rides';
import { reviewsByDriver } from '../data/reviews';
import DriverProfile from '../components/DriverProfile';
import RouteTimeline from '../components/RouteTimeline';
import FuelBreakdown from '../components/FuelBreakdown';
import LastMileGuidance from '../components/LastMileGuidance';
import ReviewCard from '../components/ReviewCard';
import './RideDetails.css';

function RideDetails() {
  const { id } = useParams();
  const ride = rides.find((r) => r.id === id);
  const [requested, setRequested] = useState(false);

  if (!ride) {
    return (
      <div className="container ride-details-notfound">
        <h1>Ride not found</h1>
        <p>This ride may no longer be available. Try searching again.</p>
        <Link to="/find-ride" className="btn btn-primary">
          Back to Find a Ride
        </Link>
      </div>
    );
  }

  const reviews = reviewsByDriver[ride.driver.id] || [];

  return (
    <div className="ride-details-page">
      <div className="container ride-details-content">
        <Link to="/find-ride" className="ride-details-back">
          ← Back to search results
        </Link>

        <div className="ride-details-heading">
          <h1>
            {ride.pickup} → {ride.destination}
          </h1>
          <p className="ride-details-tagline">100% Fuel Sharing. Zero Profit.</p>
        </div>

        <div className="ride-details-grid">
          <div className="ride-details-main">
            <DriverProfile driver={ride.driver} />

            <div className="card ride-details-route-card">
              <h3 className="ride-details-section-title">Route & Timing</h3>
              <RouteTimeline stops={ride.timeline} />
              <div className="ride-details-route-footer">
                {ride.distance} · {ride.seatsAvailable} seat
                {ride.seatsAvailable > 1 ? 's' : ''} available ·{' '}
                {ride.vehicleType === 'bike' ? 'Bike' : 'Car'}
              </div>
            </div>

            <LastMileGuidance lastMile={ride.lastMile} />

            <div className="card ride-details-reviews-card">
              <h3 className="ride-details-section-title">
                Reviews {reviews.length > 0 && `(${reviews.length})`}
              </h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => <ReviewCard key={index} review={review} />)
              ) : (
                <p className="ride-details-no-reviews">
                  No reviews yet for this driver. Be the first to travel and leave one.
                </p>
              )}
            </div>
          </div>

          <div className="ride-details-sidebar">
            <FuelBreakdown
              fuelCost={ride.fuelCost}
              tollCost={ride.tollCost}
              contribution={ride.contribution}
            />

            <div className="ride-details-request-card card">
              {requested ? (
                <div className="ride-details-success">
                  <div className="ride-details-success-icon">✓</div>
                  <h3>Ride requested!</h3>
                  <p>{ride.driver.name} will confirm your seat shortly.</p>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={() => setRequested(true)}
                  >
                    Request Ride
                  </button>
                  <p className="ride-details-request-note">
                    You won't be charged anything until the driver confirms.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RideDetails;
