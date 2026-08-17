import './RouteTimeline.css';

function RouteTimeline({ stops }) {
  return (
    <div className="route-timeline">
      {stops.map((stop, index) => (
        <div className="route-timeline-item" key={`${stop.label}-${index}`}>
          <div className="route-timeline-marker">
            <span className={`route-timeline-dot route-timeline-dot-${stop.type}`}></span>
            {index < stops.length - 1 && <span className="route-timeline-connector"></span>}
          </div>
          <div className="route-timeline-content">
            <div className="route-timeline-time">{stop.time}</div>
            <div className="route-timeline-label">
              {stop.label}
              {stop.type === 'pickup' && <span className="badge badge-green">Pickup</span>}
              {stop.type === 'destination' && <span className="badge badge-blue">Drop-off</span>}
              {stop.type === 'stop' && (
                <span className="route-timeline-join-note">Join or leave here</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RouteTimeline;
