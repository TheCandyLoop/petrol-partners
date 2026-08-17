import { maharashtraCities } from '../data/routes';
import './NeedRideForm.css';

function NeedRideForm({ formData, onChange, onSubmit, errors }) {
  const handleFieldChange = (field) => (e) => {
    onChange(field, e.target.value);
  };

  return (
    <form className="need-form card" onSubmit={onSubmit}>
      <h3 className="need-form-title">Ride Request Details</h3>

      <div className="need-form-grid">
        <div className="need-field">
          <label htmlFor="need-from">From</label>
          <select id="need-from" value={formData.from} onChange={handleFieldChange('from')}>
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="need-field">
          <label htmlFor="need-to">To</label>
          <select id="need-to" value={formData.to} onChange={handleFieldChange('to')}>
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.to && <span className="need-field-error">{errors.to}</span>}
        </div>

        <div className="need-field">
          <label htmlFor="need-date">Date</label>
          <input
            id="need-date"
            type="date"
            value={formData.date}
            onChange={handleFieldChange('date')}
          />
          {errors.date && <span className="need-field-error">{errors.date}</span>}
        </div>

        <div className="need-field">
          <label htmlFor="need-time">Preferred Time</label>
          <input
            id="need-time"
            type="time"
            value={formData.preferredTime}
            onChange={handleFieldChange('preferredTime')}
          />
          {errors.preferredTime && <span className="need-field-error">{errors.preferredTime}</span>}
        </div>

        <div className="need-field">
          <label htmlFor="need-passengers">Passengers</label>
          <select
            id="need-passengers"
            value={formData.passengers}
            onChange={handleFieldChange('passengers')}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'passenger' : 'passengers'}
              </option>
            ))}
          </select>
        </div>

        <div className="need-field">
          <label htmlFor="need-vehicle-preference">Vehicle Preference</label>
          <select
            id="need-vehicle-preference"
            value={formData.vehiclePreference}
            onChange={handleFieldChange('vehiclePreference')}
          >
            <option value="any">No preference</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
      </div>

      <div className="need-field need-field-message">
        <label htmlFor="need-message">Message (optional)</label>
        <textarea
          id="need-message"
          rows={3}
          placeholder="Anything a driver should know — flexible pickup point, luggage, timing, etc."
          value={formData.message}
          onChange={handleFieldChange('message')}
        />
      </div>

      <p className="need-form-note">
        Only fuel-sharing allowed. Profit-making is not permitted.
      </p>

      <button type="submit" className="btn btn-primary btn-block need-form-submit">
        Post Ride Request
      </button>
    </form>
  );
}

export default NeedRideForm;
