import './TrustSafety.css';

const features = [
  { icon: '✅', label: 'Verified profiles' },
  { icon: '🚗', label: 'Verified vehicles' },
  { icon: '⭐', label: 'Community ratings' },
  { icon: '📍', label: 'Live trip sharing' },
  { icon: '🆘', label: 'SOS button' },
  { icon: '🚫', label: 'Report & block' },
];

function TrustSafety() {
  return (
    <section className="section trust-safety">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Verified Community</span>
          <h2>Built on trust and safety</h2>
          <p>
            Every ride connects verified, rated members of the community — with safety tools
            available on every trip.
          </p>
        </div>

        <div className="trust-safety-grid">
          {features.map((feature) => (
            <div className="trust-safety-item" key={feature.label}>
              <span className="trust-safety-icon">{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSafety;
