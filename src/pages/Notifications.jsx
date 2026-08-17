import NotificationCard from '../components/NotificationCard';
import { notifications } from '../data/notifications';
import './Notifications.css';

function Notifications() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notifications-page">
      <div className="container notifications-content">
        <div className="notifications-heading">
          <h1>Notifications</h1>
          <p className="notifications-tagline">
            {unreadCount > 0
              ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}.`
              : "You're all caught up."}
          </p>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
