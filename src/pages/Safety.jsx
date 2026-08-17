import { useState } from 'react';
import { safetyFeatures } from '../data/safety';
import SafetyFeatureCard from '../components/SafetyFeatureCard';
import './Safety.css';

function Safety() {
  const [sosActive, setSosActive] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [blockConfirmed, setBlockConfirmed] = useState(false);

  const handleSos = () => {
    setSosActive(true);
  };

  const handleReport = (e) => {
    e.preventDefault();
    setReportSubmitted(true);
  };

  const handleBlock = () => {
    setBlockConfirmed(true);
  };

  return (
    <div className="safety-page">
      <div className="container safety-content">
        <div className="safety-heading">
          <h1>Safety Center</h1>
          <p className="safety-tagline">
            Every ride on Petrol Partners connects verified, rated members of the community —
            with safety tools available before, during, and after every trip.
          </p>
        </div>

        <div className="safety-grid">
          {safetyFeatures.map((feature) => (
            <SafetyFeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="safety-tools">
          <div className="card safety-tool-card safety-sos-card">
            <h3>SOS</h3>
            <p>
              During a trip, tap SOS to alert your emergency contact and the Petrol Partners
              safety team with your live trip details.
            </p>
            {sosActive ? (
              <div className="safety-sos-active">
                SOS alert sent. Your emergency contact has been notified. This is a UI demo —
                no real alert was sent.
              </div>
            ) : (
              <button type="button" className="btn safety-sos-btn" onClick={handleSos}>
                Trigger SOS
              </button>
            )}
          </div>

          <div className="card safety-tool-card">
            <h3>Report a User</h3>
            {reportSubmitted ? (
              <p className="safety-tool-confirm">
                Thanks — your report has been sent to our safety team for review.
              </p>
            ) : (
              <form className="safety-report-form" onSubmit={handleReport}>
                <label htmlFor="safety-report-reason">What happened?</label>
                <textarea
                  id="safety-report-reason"
                  rows={3}
                  placeholder="Describe the issue you'd like to report."
                  required
                />
                <button type="submit" className="btn btn-secondary">
                  Submit Report
                </button>
              </form>
            )}
          </div>

          <div className="card safety-tool-card">
            <h3>Block a User</h3>
            <p>
              Blocking a user means they can no longer message you, see your rides, or appear
              in your search results.
            </p>
            {blockConfirmed ? (
              <p className="safety-tool-confirm">User blocked.</p>
            ) : (
              <button type="button" className="btn btn-secondary" onClick={handleBlock}>
                Block This User
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
