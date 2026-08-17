import { Link } from 'react-router-dom';
import TripCard from '../components/TripCard';
import NotificationCard from '../components/NotificationCard';
import { currentUser } from '../data/currentUser';
import { upcomingTrips, pastTrips } from '../data/trips';
import { notifications } from '../data/notifications';
import { rideRequests } from '../data/rideRequests';
import { conversations } from '../data/conversations';
import './Dashboard.css';

const quickActions = [
  { label: 'Find a Ride', to: '/find-ride', variant: 'btn-primary' },
  { label: 'Offer a Ride', to: '/offer-ride', variant: 'btn-secondary' },
  { label: 'Need a Ride', to: '/need-ride', variant: 'btn-secondary' },
];

function Dashboard() {
  const recentNotifications = notifications.slice(0, 3);
  const yourRequests = rideRequests.slice(0, 2);
  const recentConversations = conversations.slice(0, 2);
  const unreadMessageCount = conversations.filter((c) => c.unread).length;
  const totalTrips = upcomingTrips.length + pastTrips.length;
  const totalContribution = [...upcomingTrips, ...pastTrips].reduce(
    (sum, trip) => sum + trip.contribution,
    0
  );

  return (
    <div className="dashboard-page">
      <div className="container dashboard-content">
        <div className="dashboard-heading">
          <div>
            <h1>Welcome back, {currentUser.name.split(' ')[0]}</h1>
            <p className="dashboard-tagline">Here's what's happening with your rides.</p>
          </div>
          <div className="dashboard-quick-actions">
            {quickActions.map((action) => (
              <Link key={action.to} to={action.to} className={`btn ${action.variant}`}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="dashboard-stats">
          <div className="card dashboard-stat">
            <span className="dashboard-stat-value">{currentUser.rating.toFixed(1)}</span>
            <span className="dashboard-stat-label">Average rating</span>
          </div>
          <div className="card dashboard-stat">
            <span className="dashboard-stat-value">{currentUser.completedRides}</span>
            <span className="dashboard-stat-label">Rides completed</span>
          </div>
          <div className="card dashboard-stat">
            <span className="dashboard-stat-value">{totalTrips}</span>
            <span className="dashboard-stat-label">Trips on record</span>
          </div>
          <div className="card dashboard-stat">
            <span className="dashboard-stat-value">Rs {totalContribution}</span>
            <span className="dashboard-stat-label">Total fuel shared</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-main">
            <section className="dashboard-section">
              <div className="dashboard-section-header">
                <h2>Upcoming Rides</h2>
              </div>
              <div className="dashboard-trip-list">
                {upcomingTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </section>

            <section className="dashboard-section">
              <div className="dashboard-section-header">
                <h2>Trip History</h2>
              </div>
              <div className="dashboard-trip-list">
                {pastTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </section>

            <section className="dashboard-section">
              <div className="dashboard-section-header">
                <h2>Nearby Ride Requests</h2>
                <Link to="/need-ride" className="dashboard-section-link">
                  View all
                </Link>
              </div>
              <div className="dashboard-request-list">
                {yourRequests.map((request) => (
                  <div key={request.id} className="dashboard-request-item card">
                    <div className="dashboard-request-route">
                      {request.from} → {request.to}
                    </div>
                    <div className="dashboard-request-meta">
                      {request.date} · {request.preferredTime} · {request.requester.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="dashboard-sidebar">
            <section className="card dashboard-profile-card">
              <div className="dashboard-profile-header">
                <div className="dashboard-profile-avatar">{currentUser.initials}</div>
                <div>
                  <div className="dashboard-profile-name">{currentUser.name}</div>
                  <div className="dashboard-profile-meta">
                    Profile {currentUser.profileCompletion}% complete
                  </div>
                </div>
              </div>
              <Link to="/profile" className="btn btn-secondary btn-block dashboard-profile-cta">
                View Profile
              </Link>
            </section>

            <section className="card dashboard-messages-card">
              <div className="dashboard-section-header">
                <h3>
                  Messages
                  {unreadMessageCount > 0 && (
                    <span className="dashboard-unread-badge">{unreadMessageCount}</span>
                  )}
                </h3>
                <Link to="/messages" className="dashboard-section-link">
                  View all
                </Link>
              </div>
              <div className="dashboard-messages-list">
                {recentConversations.map((conversation) => (
                  <Link
                    key={conversation.id}
                    to="/messages"
                    className="dashboard-message-preview"
                  >
                    <div className="dashboard-message-avatar">
                      {conversation.participant.initials}
                    </div>
                    <div className="dashboard-message-info">
                      <div className="dashboard-message-name">
                        {conversation.participant.name}
                        {conversation.unread && <span className="dashboard-unread-dot" />}
                      </div>
                      <div className="dashboard-message-route">{conversation.route}</div>
                    </div>
                    <div className="dashboard-message-time">{conversation.lastMessageAt}</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card dashboard-notifications-card">
              <div className="dashboard-section-header">
                <h3>Notifications</h3>
                <Link to="/notifications" className="dashboard-section-link">
                  View all
                </Link>
              </div>
              <div className="dashboard-notifications-list">
                {recentNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
