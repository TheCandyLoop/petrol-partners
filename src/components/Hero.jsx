import SearchForm from './SearchForm';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">Currently live across Maharashtra</span>
          <h1>Share the Journey. Share the Fuel.</h1>
          <p className="hero-subtitle">
            Connect with people already travelling your way and share the real cost of the
            journey — not profits.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>₹0</strong>
              <span>Platform fee</span>
            </div>
            <div className="hero-stat">
              <strong>₹0</strong>
              <span>Driver profit</span>
            </div>
            <div className="hero-stat">
              <strong>13</strong>
              <span>Maharashtra cities</span>
            </div>
          </div>
        </div>

        <div className="hero-search">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;
