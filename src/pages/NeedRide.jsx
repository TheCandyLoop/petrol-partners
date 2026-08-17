import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeedRideForm from '../components/NeedRideForm';
import RideRequestCard from '../components/RideRequestCard';
import { rideRequests } from '../data/rideRequests';
import './NeedRide.css';

const initialFormData = {
  from: 'Pune',
  to: 'Mumbai',
  date: '',
  preferredTime: '',
  passengers: 1,
  vehiclePreference: 'any',
  message: '',
};

function NeedRide() {
  const [posted, setPosted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (formData.from === formData.to) {
      nextErrors.to = 'Destination must be different from pickup.';
    }
    if (!formData.date) {
      nextErrors.date = 'Please select a date.';
    }
    if (!formData.preferredTime) {
      nextErrors.preferredTime = 'Please select a preferred time.';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setPosted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePostAnother = () => {
    setFormData(initialFormData);
    setErrors({});
    setPosted(false);
  };

  const nearbyRequests = rideRequests.filter(
    (request) => request.from !== formData.from || request.to !== formData.to
  );

  return (
    <div className="need-ride-page">
      <div className="container need-ride-content">
        <div className="need-ride-heading">
          <h1>Need a Ride</h1>
          <p className="need-ride-tagline">
            Post where you're headed and nearby drivers already making that trip can offer
            you a seat — always fuel-sharing, never for profit.
          </p>
        </div>

        {!posted && (
          <div className="need-ride-grid">
            <NeedRideForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errors={errors}
            />
            <div className="need-ride-sidebar">
              <div className="card need-ride-tip-card">
                <h3 className="need-ride-section-title">How it works</h3>
                <ul className="need-ride-tip-list">
                  <li>Your request becomes visible to drivers already travelling your route.</li>
                  <li>Matching drivers can reach out or you can browse and request their ride directly.</li>
                  <li>You only ever contribute toward real fuel and toll cost — zero profit.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {posted && (
          <div className="need-ride-success card">
            <div className="need-ride-success-icon">✓</div>
            <h2>Your ride request is live.</h2>
            <p>
              {formData.from} → {formData.to} on {formData.date} around{' '}
              {formData.preferredTime} is now visible to drivers travelling that route.
            </p>
            <div className="need-ride-success-actions">
              <button type="button" className="btn btn-primary" onClick={handlePostAnother}>
                Post Another Request
              </button>
              <Link to="/find-ride" className="btn btn-secondary">
                Browse Available Rides
              </Link>
            </div>
          </div>
        )}

        <div className="need-ride-nearby">
          <h3 className="need-ride-section-title">Nearby Ride Requests</h3>
          <p className="need-ride-nearby-subtitle">
            Other passengers looking for a ride across Maharashtra right now.
          </p>
          <div className="need-ride-request-list">
            {nearbyRequests.map((request) => (
              <RideRequestCard key={request.id} request={request} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedRide;
