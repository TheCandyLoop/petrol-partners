import './DriverProfile.css';

function DriverProfile({ driver }) {
  return (
    <div className="driver-profile card">
      <div className="driver-profile-header">
        <div className="driver-profile-avatar">{driver.initials}</div>
        <div>
          <div className="driver-profile-name">
            {driver.name}
            {driver.verified ? (
              <span className="badge badge-blue">Verified</span>
            ) : (
              <span className="badge driver-profile-pending-badge">Verification pending</span>
            )}
          </div>
          <div className="driver-profile-stats">
            <span className="driver-profile-rating">★ {driver.rating.toFixed(1)}</span>
            <span className="driver-profile-dot">•</span>
            <span>{driver.completedRides} rides completed</span>
            <span className="driver-profile-dot">•</span>
            <span>Member since {driver.memberSince}</span>
          </div>
        </div>
      </div>

      <p className="driver-profile-bio">{driver.bio}</p>

      <div className="driver-profile-vehicle">
        <div className="driver-profile-vehicle-item">
          <span className="driver-profile-vehicle-label">Vehicle</span>
          <span className="driver-profile-vehicle-value">{driver.vehicle}</span>
        </div>
        <div className="driver-profile-vehicle-item">
          <span className="driver-profile-vehicle-label">Fuel type</span>
          <span className="driver-profile-vehicle-value">{driver.fuelType}</span>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
