import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">
            Share the Journey, Share the Fuel. A community platform for people already
            travelling your way.
          </p>
          <p className="footer-availability">
            Currently available across Maharashtra. India coming soon.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <Link to="/find-ride">Find a Ride</Link>
            <Link to="/offer-ride">Offer a Ride</Link>
            <Link to="/need-ride">Need a Ride</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="footer-column">
            <h4>Trust & Safety</h4>
            <Link to="/safety">Safety Center</Link>
            <Link to="/verification">Verification</Link>
            <Link to="/reviews">Reviews</Link>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Petrol Partners. 100% Fuel Sharing. Zero Profit.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
