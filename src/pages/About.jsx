import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    title: '100% Fuel Sharing. Zero Profit.',
    description:
      'Every rupee a passenger contributes goes toward the real fuel and toll cost of the trip. There is no platform fee and no driver profit, ever.',
  },
  {
    title: 'Community, not commerce',
    description:
      "We're not a ride-hailing service. Drivers are already going somewhere — Petrol Partners simply helps them share the empty seats they already have.",
  },
  {
    title: 'Built for Maharashtra',
    description:
      'We started with the routes people actually travel every day across Maharashtra, from daily Pune-Mumbai commutes to longer trips to Nashik and Kolhapur.',
  },
];

function About() {
  return (
    <div className="about-page">
      <div className="container about-content">
        <div className="about-hero">
          <span className="section-eyebrow">About Us</span>
          <h1>Share the Journey. Share the Fuel.</h1>
          <p className="about-hero-copy">
            Petrol Partners is a community carpooling and bikepooling platform built for
            Maharashtra. We connect people already travelling somewhere with people who need
            to go the same way, so the real cost of the trip — and never a profit — is shared
            between them.
          </p>
        </div>

        <div className="about-values">
          {values.map((value) => (
            <div className="card about-value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="about-story card">
          <h2>Why we built this</h2>
          <p>
            Every day, thousands of empty seats travel the same highways across Maharashtra —
            people commuting to work, visiting family, or making a trip they were going to make
            anyway. At the same time, plenty of people are searching for an affordable, safe
            way to make that same journey. Petrol Partners exists to connect the two, without
            turning it into a commercial ride-hailing business. Drivers aren't running a taxi
            service — they're simply sharing a cost they were already going to pay.
          </p>
        </div>

        <div className="about-cta">
          <h2>Currently available across Maharashtra. India coming soon.</h2>
          <div className="about-cta-actions">
            <Link to="/find-ride" className="btn btn-primary">
              Find a Ride
            </Link>
            <Link to="/offer-ride" className="btn btn-secondary">
              Offer a Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
