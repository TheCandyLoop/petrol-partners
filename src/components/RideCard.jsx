import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RideCard.css';

function RideCard({ ride }) {
  const [requested, setRequested] = useState(false);
  const { driver } = ride;

  const handleRequest = () => {
    setRequested(true);
  };

  return (
    <div className="ride-card card">
      <div className="ride-card-driver">
        <div className="ride-avatar">{driver.initials}</div>
        <div>
          <div className="ride-driver-name">
            {driver.name}
            {driver.verified && (
              <span className="badge badge-blue ride-verified-badge">Verified</span>
            )}
          </div>
          <div className="ride-driver-meta">
            <span className="ride-rating">★ {driver.rating.toFixed(1)}</span>
            <span className="ride-meta-dot">•</span>
            <span>{driver.completedRides} rides completed</span>
          </div>
          <div className="ride-vehicle-meta">
            {driver.vehicle}
            <span className="ride-meta-dot">•</span>
            {driver.fuelType}
            <span className="ride-meta-dot">•</span>
            {ride.vehicleType === 'bike' ? 'Bike' : 'Car'}
          </div>
        </div>
      </div>

      <div className="ride-card-route">
        <div className="ride-route-times">
          <div className="ride-route-point">
            <span className="ride-time">{ride.departureTime}</span>
            <span className="ride-city">{ride.pickup}</span>
          </div>
          <div className="ride-route-line">
            <span className="ride-route-dot"></span>
            <span className="ride-route-track"></span>
            <span className="ride-route-dot"></span>
          </div>
          <div className="ride-route-point ride-route-point-end">
            <span className="ride-time">{ride.arrivalTime}</span>
            <span className="ride-city">{ride.destination}</span>
          </div>
        </div>
        {ride.stops.length > 0 && (
          <div className="ride-stops-note">
            Via {ride.stops.join(', ')} — join or leave at any stop
          </div>
        )}
        <div className="ride-distance-note">{ride.distance} · {ride.seatsAvailable} seat{ride.seatsAvailable > 1 ? 's' : ''} left</div>
      </div>

      <div className="ride-card-price">
        <div className="ride-price-amount">₹{ride.contribution}</div>
        <div className="ride-price-label">fuel contribution</div>
        <Link to={`/rides/${ride.id}`} className="btn btn-secondary ride-card-btn">
          View Details
        </Link>
        <button
          type="button"
          className={`btn ride-card-btn ${requested ? 'ride-requested-btn' : 'btn-primary'}`}
          onClick={handleRequest}
          disabled={requested}
        >
          {requested ? 'Requested ✓' : 'Request Ride'}
        </button>
      </div>
    </div>
  );
}

export default RideCard;
