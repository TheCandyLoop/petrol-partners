import './SafetyFeatureCard.css';

function SafetyFeatureCard({ icon, title, description, action }) {
  return (
    <div className="safety-feature-card card">
      <span className="safety-feature-icon">{icon}</span>
      <h3 className="safety-feature-title">{title}</h3>
      <p className="safety-feature-description">{description}</p>
      {action && <div className="safety-feature-action">{action}</div>}
    </div>
  );
}

export default SafetyFeatureCard;
