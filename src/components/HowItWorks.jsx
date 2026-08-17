import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Search or publish a journey',
    description: 'Look for a ride going your way, or publish your own trip if you have empty seats.',
  },
  {
    number: '02',
    title: 'Compare compatible rides',
    description: 'See verified drivers, routes, timings, and fuel-sharing contributions side by side.',
  },
  {
    number: '03',
    title: 'Join the journey',
    description: 'Request a seat and get confirmed by the driver, even from an intermediate stop.',
  },
  {
    number: '04',
    title: 'Share the actual travel cost',
    description: 'Pay a fair share of fuel and toll costs. No platform fee, no driver profit.',
  },
];

function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">How It Works</span>
          <h2>Four simple steps to share a journey</h2>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step) => (
            <div className="how-it-works-step" key={step.number}>
              <span className="how-it-works-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
