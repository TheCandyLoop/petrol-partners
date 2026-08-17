import { Link } from 'react-router-dom';
import './FinalCta.css';

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <h2>Ready to share your journey?</h2>
        <p>Join the Maharashtra community already saving on every trip.</p>
        <div className="final-cta-actions">
          <Link to="/find-ride" className="btn btn-primary">
            Find a Ride
          </Link>
          <Link to="/offer-ride" className="btn btn-secondary">
            Offer a Ride
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
