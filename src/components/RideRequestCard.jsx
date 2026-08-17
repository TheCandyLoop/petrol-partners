import './RideRequestCard.css';

const vehicleLabels = {
  car: 'Car preferred',
  bike: 'Bike preferred',
  any: 'No vehicle preference',
};

function RideRequestCard({ request }) {
  const { requester } = request;

  return (
    <div className="request-card card">
      <div className="request-card-header">
        <div className="request-avatar">{requester.initials}</div>
        <div>
          <div className="request-name">{requester.name}</div>
          <div className="request-posted">Posted {request.postedAgo}</div>
        </div>
      </div>

      <div className="request-route">
        <span className="request-city">{request.from}</span>
        <span className="request-route-arrow">→</span>
        <span className="request-city">{request.to}</span>
      </div>

      <div className="request-meta">
        <span>{request.date}</span>
        <span className="request-meta-dot">•</span>
        <span>{request.preferredTime}</span>
        <span className="request-meta-dot">•</span>
        <span>
          {request.passengers} {request.passengers === 1 ? 'passenger' : 'passengers'}
        </span>
        <span className="request-meta-dot">•</span>
        <span>{vehicleLabels[request.vehiclePreference]}</span>
      </div>

      {request.message && <p className="request-message">"{request.message}"</p>}
    </div>
  );
}

export default RideRequestCard;
