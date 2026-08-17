import './TripCard.css';

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <div className="trip-card-route">
        <span className={`badge ${trip.role === 'driver' ? 'badge-green' : 'badge-blue'}`}>
          {trip.role === 'driver' ? 'Driving' : 'Passenger'}
        </span>
        <span className="trip-card-cities">
          {trip.from} → {trip.to}
        </span>
      </div>

      <div className="trip-card-meta">
        <span>{trip.date}</span>
        <span className="trip-card-dot">•</span>
        <span>{trip.time}</span>
        {trip.role === 'driver' ? (
          <>
            <span className="trip-card-dot">•</span>
            <span>{trip.seats}</span>
          </>
        ) : (
          <>
            <span className="trip-card-dot">•</span>
            <span>with {trip.withDriver}</span>
          </>
        )}
      </div>

      <div className="trip-card-footer">
        <span className="trip-card-status">{trip.status}</span>
        <span className="trip-card-contribution">Rs {trip.contribution}</span>
      </div>
    </div>
  );
}

export default TripCard;
