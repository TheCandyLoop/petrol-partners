import './NotificationCard.css';

const iconByType = {
  ride: '🚗',
  reminder: '⏰',
  review: '★',
  system: 'ℹ',
};

function NotificationCard({ notification }) {
  return (
    <div className={`notification-card ${notification.read ? '' : 'notification-card-unread'}`}>
      <div className="notification-icon">{iconByType[notification.type] || 'ℹ'}</div>
      <div className="notification-body">
        <div className="notification-message">{notification.message}</div>
        <p className="notification-detail">{notification.detail}</p>
        <div className="notification-time">{notification.time}</div>
      </div>
      {!notification.read && <span className="notification-dot" aria-label="Unread" />}
    </div>
  );
}

export default NotificationCard;
