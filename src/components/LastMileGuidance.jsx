import './LastMileGuidance.css';

const options = [
  { label: 'Walk', icon: '🚶' },
  { label: 'Auto', icon: '🛺' },
  { label: 'Metro', icon: '🚇' },
  { label: 'Bus', icon: '🚌' },
];

function LastMileGuidance({ lastMile }) {
  return (
    <div className="last-mile card">
      <h3 className="last-mile-title">Last-Mile Guidance</h3>
      <p className="last-mile-note">{lastMile.note}</p>

      <div className="last-mile-options">
        {options.map((option) => (
          <div className="last-mile-option" key={option.label}>
            <span className="last-mile-option-icon">{option.icon}</span>
            <span>{option.label}</span>
          </div>
        ))}
      </div>

      <p className="last-mile-disclaimer">
        Guidance only — Petrol Partners does not book or track last-mile transport.
      </p>
    </div>
  );
}

export default LastMileGuidance;
