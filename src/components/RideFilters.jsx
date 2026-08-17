import './RideFilters.css';

const vehicleOptions = [
  { value: 'all', label: 'All' },
  { value: 'car', label: 'Car' },
  { value: 'bike', label: 'Bike' },
];

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-low', label: 'Fuel contribution: Low to High' },
  { value: 'earliest', label: 'Departure: Earliest first' },
  { value: 'rating', label: 'Driver rating: Highest first' },
];

function RideFilters({ vehicleFilter, onVehicleChange, sortBy, onSortChange, resultsCount }) {
  return (
    <div className="ride-filters">
      <div className="ride-filters-left">
        <span className="ride-filters-count">
          {resultsCount} {resultsCount === 1 ? 'ride' : 'rides'} found
        </span>
        <div className="ride-filters-toggle">
          {vehicleOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`ride-toggle-btn ${vehicleFilter === option.value ? 'ride-toggle-btn-active' : ''}`}
              onClick={() => onVehicleChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ride-filters-sort">
        <label htmlFor="sortBy">Sort by</label>
        <select id="sortBy" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default RideFilters;
