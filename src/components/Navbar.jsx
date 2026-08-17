import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const navLinks = [
  { label: 'Find a Ride', to: '/find-ride' },
  { label: 'Offer a Ride', to: '/offer-ride' },
  { label: 'Need a Ride', to: '/need-ride' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Safety', to: '/safety' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Logo />

        <nav className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar-mobile-actions">
            <Link to="/dashboard" className="btn btn-secondary btn-block" onClick={() => setMenuOpen(false)}>
              Login / Profile
            </Link>
          </div>
        </nav>

        <div className="navbar-actions">
          <Link to="/dashboard" className="navbar-profile-link">
            Login / Profile
          </Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
