import { Link } from 'react-router-dom';
import './Logo.css';

function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-mark">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3C12.8 3 7 8.9 7 16.2 7 26.5 20 37 20 37s13-10.5 13-20.8C33 8.9 27.2 3 20 3z"
            fill="url(#pinGradient)"
          />
          <path
            d="M20 11.5c2.8 3.2 4.3 5.8 4.3 8a4.3 4.3 0 11-8.6 0c0-2.2 1.5-4.8 4.3-8z"
            fill="#ffffff"
          />
          <defs>
            <linearGradient id="pinGradient" x1="7" y1="3" x2="33" y2="37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0b5f3c" />
              <stop offset="1" stopColor="#1f6fd6" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="logo-text">
        Petrol <span className="logo-text-accent">Partners</span>
      </span>
    </Link>
  );
}

export default Logo;
