import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import RideFilters from '../components/RideFilters';
import RideCard from '../components/RideCard';
import { rides } from '../data/rides';
import './FindRide.css';

function matchesCity(ride, pickup, destination) {
  if (!pickup && !destination) return true;

  const places = [ride.pickup, ride.destination, ...ride.stops].map((p) => p.toLowerCase());

  const pickupOk = !pickup || places.includes(pickup.toLowerCase());
  const destinationOk = !destination || places.includes(destination.toLowerCase());

  return pickupOk && destinationOk;
}

function FindRide() {
  const [searchParams] = useSearchParams();
  const pickup = searchParams.get('pickup') || '';
  const destination = searchParams.get('destination') || '';
  const passengers = Number(searchParams.get('passengers')) || 1;

  const [vehicleFilter, setVehicleFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');

  const strictMatches = useMemo(
    () => rides.filter((ride) => matchesCity(ride, pickup, destination) && ride.seatsAvailable >= passengers),
    [pickup, destination, passengers],
  );

  const usingFallback = strictMatches.length === 0;
  const baseResults = usingFallback ? rides : strictMatches;

  const filteredResults = useMemo(() => {
    let results = baseResults;

    if (vehicleFilter !== 'all') {
      results = results.filter((ride) => ride.vehicleType === vehicleFilter);
    }

    const sorted = [...results];
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.contribution - b.contribution);
    } else if (sortBy === 'earliest') {
      sorted.sort((a, b) => a.departureMinutes - b.departureMinutes);
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.driver.rating - a.driver.rating);
    }

    return sorted;
  }, [baseResults, vehicleFilter, sortBy]);

  return (
    <div className="find-ride-page">
      <div className="find-ride-search-bar">
        <div className="container">
          <SearchForm />
        </div>
      </div>

      <div className="container find-ride-content">
        <div className="find-ride-heading">
          <h1>
            {pickup && destination ? `${pickup} → ${destination}` : 'Available rides'}
          </h1>
          <p className="find-ride-tagline">100% Fuel Sharing. Zero Profit.</p>
        </div>

        {usingFallback && pickup && destination && (
          <div className="find-ride-fallback-note">
            No exact matches for {pickup} → {destination} right now. Showing all available
            rides across Maharashtra instead.
          </div>
        )}

        <RideFilters
          vehicleFilter={vehicleFilter}
          onVehicleChange={setVehicleFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={filteredResults.length}
        />

        {filteredResults.length === 0 ? (
          <div className="find-ride-empty card">
            <h3>No rides match your filters</h3>
            <p>Try switching the vehicle type or check back closer to your travel date.</p>
            <button type="button" className="btn btn-secondary" onClick={() => setVehicleFilter('all')}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="find-ride-list">
            {filteredResults.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FindRide;
