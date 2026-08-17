import { maharashtraCities } from '../data/routes';
import './OfferRideForm.css';

const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

function OfferRideForm({ formData, onChange, onSubmit, errors }) {
  const handleFieldChange = (field) => (e) => {
    onChange(field, e.target.value);
  };

  return (
    <form className="offer-form card" onSubmit={onSubmit}>
      <h3 className="offer-form-title">Ride Details</h3>

      <div className="offer-form-grid">
        <div className="offer-field">
          <label htmlFor="offer-pickup">Pickup</label>
          <select id="offer-pickup" value={formData.pickup} onChange={handleFieldChange('pickup')}>
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="offer-field">
          <label htmlFor="offer-destination">Destination</label>
          <select
            id="offer-destination"
            value={formData.destination}
            onChange={handleFieldChange('destination')}
          >
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.destination && <span className="offer-field-error">{errors.destination}</span>}
        </div>

        <div className="offer-field">
          <label htmlFor="offer-date">Date</label>
          <input
            id="offer-date"
            type="date"
            value={formData.date}
            onChange={handleFieldChange('date')}
          />
          {errors.date && <span className="offer-field-error">{errors.date}</span>}
        </div>

        <div className="offer-field">
          <label htmlFor="offer-time">Time</label>
          <input
            id="offer-time"
            type="time"
            value={formData.time}
            onChange={handleFieldChange('time')}
          />
          {errors.time && <span className="offer-field-error">{errors.time}</span>}
        </div>

        <div className="offer-field">
          <label htmlFor="offer-vehicle">Vehicle</label>
          <select id="offer-vehicle" value={formData.vehicleType} onChange={handleFieldChange('vehicleType')}>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>

        <div className="offer-field">
          <label htmlFor="offer-seats">Available Seats</label>
          <select id="offer-seats" value={formData.seats} onChange={handleFieldChange('seats')}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'seat' : 'seats'}
              </option>
            ))}
          </select>
        </div>

        <div className="offer-field">
          <label htmlFor="offer-fuel-type">Fuel Type</label>
          <select id="offer-fuel-type" value={formData.fuelType} onChange={handleFieldChange('fuelType')}>
            {fuelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="offer-field">
          <label htmlFor="offer-mileage">Estimated Mileage (km/l)</label>
          <input
            id="offer-mileage"
            type="number"
            min="1"
            placeholder="e.g. 16"
            value={formData.mileage}
            onChange={handleFieldChange('mileage')}
          />
          {errors.mileage && <span className="offer-field-error">{errors.mileage}</span>}
        </div>

        <div className="offer-field">
          <label htmlFor="offer-fuel-cost">Estimated Fuel Cost (Rs)</label>
          <input
            id="offer-fuel-cost"
            type="number"
            min="0"
            placeholder="e.g. 280"
            value={formData.fuelCost}
            onChange={handleFieldChange('fuelCost')}
          />
          {errors.fuelCost && <span className="offer-field-error">{errors.fuelCost}</span>}
        </div>

        <div className="offer-field">
          <label htmlFor="offer-toll">Toll Charges (Rs)</label>
          <input
            id="offer-toll"
            type="number"
            min="0"
            placeholder="e.g. 60"
            value={formData.tollCost}
            onChange={handleFieldChange('tollCost')}
          />
        </div>
      </div>

      <p className="offer-form-note">Only fuel-sharing allowed. Profit-making is not permitted.</p>

      <button type="submit" className="btn btn-primary btn-block offer-form-submit">
        Preview Ride
      </button>
    </form>
  );
}

export default OfferRideForm;
