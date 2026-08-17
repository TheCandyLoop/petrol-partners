import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { maharashtraCities } from '../data/routes';
import './SearchForm.css';

function SearchForm() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('Pune');
  const [destination, setDestination] = useState('Mumbai');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('car');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      pickup,
      destination,
      date,
      vehicle,
      passengers: String(passengers),
    });
    navigate(`/find-ride?${params.toString()}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form-grid">
        <div className="search-field">
          <label htmlFor="pickup">Pickup</label>
          <select id="pickup" value={pickup} onChange={(e) => setPickup(e.target.value)}>
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {maharashtraCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="date">Travel Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="search-field">
          <label htmlFor="vehicle">Vehicle</label>
          <select id="vehicle" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="passengers">Passengers</label>
          <select
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'passenger' : 'passengers'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="search-form-actions">
        <button type="submit" className="btn btn-primary">
          Find a Ride
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate('/offer-ride')}
        >
          Offer a Ride
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
