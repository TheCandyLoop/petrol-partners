import { useState } from 'react';
import { Link } from 'react-router-dom';
import OfferRideForm from '../components/OfferRideForm';
import RouteTimeline from '../components/RouteTimeline';
import FuelBreakdown from '../components/FuelBreakdown';
import './OfferRide.css';

const initialFormData = {
  pickup: 'Pune',
  destination: 'Mumbai',
  date: '',
  time: '',
  vehicleType: 'car',
  seats: 2,
  fuelType: 'Petrol',
  mileage: '',
  fuelCost: '',
  tollCost: '',
};

function formatTime12hr(time24) {
  if (!time24) return '';
  const [hoursStr, minutes] = time24.split(':');
  let hours = parseInt(hoursStr, 10);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')}:${minutes} ${suffix}`;
}

function OfferRide() {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (formData.pickup === formData.destination) {
      nextErrors.destination = 'Destination must be different from pickup.';
    }
    if (!formData.date) {
      nextErrors.date = 'Please select a date.';
    }
    if (!formData.time) {
      nextErrors.time = 'Please select a time.';
    }
    if (!formData.mileage || Number(formData.mileage) <= 0) {
      nextErrors.mileage = 'Enter an estimated mileage.';
    }
    if (!formData.fuelCost || Number(formData.fuelCost) <= 0) {
      nextErrors.fuelCost = 'Enter an estimated fuel cost.';
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStep('preview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePublish = () => {
    setStep('published');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOfferAnother = () => {
    setFormData(initialFormData);
    setErrors({});
    setStep('form');
  };

  const seats = Number(formData.seats) || 1;
  const fuelCost = Number(formData.fuelCost) || 0;
  const tollCost = Number(formData.tollCost) || 0;
  const contribution = seats > 0 ? Math.round((fuelCost + tollCost) / seats) : 0;

  const timelinePreview = [
    { label: formData.pickup, time: formatTime12hr(formData.time) || 'Departure time', type: 'pickup' },
    { label: formData.destination, time: 'Estimated arrival', type: 'destination' },
  ];

  return (
    <div className="offer-ride-page">
      <div className="container offer-ride-content">
        <div className="offer-ride-heading">
          <h1>Offer a Ride</h1>
          <p className="offer-ride-tagline">
            Already travelling this way? Share your empty seats and split the real fuel cost —
            never for profit.
          </p>
        </div>

        {step === 'form' && (
          <div className="offer-ride-grid">
            <OfferRideForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errors={errors}
            />
            <div className="offer-ride-sidebar">
              <FuelBreakdown fuelCost={fuelCost} tollCost={tollCost} contribution={contribution} />
              <p className="offer-ride-sidebar-note">
                This updates live as you fill in the fuel cost, toll charges, and seats — the
                contribution shown is the amount each passenger would pay.
              </p>
            </div>
          </div>
        )}

        {step === 'preview' && (
          <div className="offer-ride-grid">
            <div className="offer-ride-preview-main">
              <div className="card offer-ride-preview-card">
                <h3 className="offer-ride-section-title">Route Preview</h3>
                <RouteTimeline stops={timelinePreview} />
                <div className="offer-ride-preview-footer">
                  {formData.date} · {formData.vehicleType === 'bike' ? 'Bike' : 'Car'} ·{' '}
                  {seats} seat{seats > 1 ? 's' : ''} · {formData.fuelType}
                </div>
              </div>
              <button type="button" className="btn btn-secondary" onClick={() => setStep('form')}>
                ← Edit details
              </button>
            </div>

            <div className="offer-ride-sidebar">
              <FuelBreakdown fuelCost={fuelCost} tollCost={tollCost} contribution={contribution} />
              <button type="button" className="btn btn-primary btn-block" onClick={handlePublish}>
                Publish Ride
              </button>
            </div>
          </div>
        )}

        {step === 'published' && (
          <div className="offer-ride-success card">
            <div className="offer-ride-success-icon">✓</div>
            <h2>Your ride has been published.</h2>
            <p>
              {formData.pickup} → {formData.destination} on {formData.date} at{' '}
              {formatTime12hr(formData.time)} is now visible to passengers searching that route.
            </p>
            <div className="offer-ride-success-summary">
              <span>{seats} seat{seats > 1 ? 's' : ''} available</span>
              <span className="offer-ride-success-dot">•</span>
              <span>Rs {contribution} per passenger</span>
            </div>
            <div className="offer-ride-success-actions">
              <button type="button" className="btn btn-primary" onClick={handleOfferAnother}>
                Offer Another Ride
              </button>
              <Link to="/dashboard" className="btn btn-secondary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferRide;
