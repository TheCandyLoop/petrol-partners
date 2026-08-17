import { Link } from 'react-router-dom';
import { currentUser } from '../data/currentUser';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <div className="container profile-content">
        <div className="profile-grid">
          <div className="card profile-main">
            <div className="profile-header">
              <div className="profile-avatar">{currentUser.initials}</div>
              <div>
                <div className="profile-name">
                  {currentUser.name}
                  {currentUser.verified && <span className="badge badge-blue">Verified</span>}
                </div>
                <div className="profile-stats">
                  <span className="profile-rating">★ {currentUser.rating.toFixed(1)}</span>
                  <span className="profile-dot">•</span>
                  <span>{currentUser.completedRides} rides completed</span>
                  <span className="profile-dot">•</span>
                  <span>Member since {currentUser.memberSince}</span>
                </div>
              </div>
            </div>

            <p className="profile-bio">{currentUser.bio}</p>

            <div className="profile-details">
              <div className="profile-detail-item">
                <span className="profile-detail-label">Home city</span>
                <span className="profile-detail-value">{currentUser.homeCity}</span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Vehicle</span>
                <span className="profile-detail-value">{currentUser.vehicle}</span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Fuel type</span>
                <span className="profile-detail-value">{currentUser.fuelType}</span>
              </div>
            </div>

            <div className="profile-actions">
              <Link to="/reviews" className="btn btn-secondary">
                View Reviews
              </Link>
              <Link to="/verification" className="btn btn-secondary">
                Manage Verification
              </Link>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="card profile-completion-card">
              <div className="profile-completion-header">
                <h3>Profile completion</h3>
                <span className="profile-completion-percent">{currentUser.profileCompletion}%</span>
              </div>
              <div className="profile-completion-bar">
                <div
                  className="profile-completion-fill"
                  style={{ width: `${currentUser.profileCompletion}%` }}
                />
              </div>
              <ul className="profile-checklist">
                {currentUser.profileChecklist.map((item) => (
                  <li key={item.label} className={item.done ? 'profile-checklist-done' : ''}>
                    <span className="profile-checklist-icon">{item.done ? '✓' : '○'}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
              {currentUser.profileCompletion < 100 && (
                <Link to="/verification" className="btn btn-primary btn-block profile-completion-cta">
                  Complete Verification
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
