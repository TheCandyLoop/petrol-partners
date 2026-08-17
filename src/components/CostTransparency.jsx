import './CostTransparency.css';

function CostTransparency() {
  return (
    <section className="section cost-transparency">
      <div className="container cost-transparency-inner">
        <div className="section-heading" style={{ marginBottom: 32 }}>
          <span className="section-eyebrow">Cost Transparency</span>
          <h2>You always know where the money goes</h2>
          <p>Every ride shows a clear, honest breakdown. No hidden margins, ever.</p>
        </div>

        <div className="cost-breakdown-card card">
          <div className="cost-row">
            <span>Fuel Cost</span>
            <strong>₹280</strong>
          </div>
          <div className="cost-row">
            <span>Toll Cost</span>
            <strong>₹60</strong>
          </div>
          <div className="cost-row cost-row-muted">
            <span>Platform Fee</span>
            <strong>₹0</strong>
          </div>
          <div className="cost-row cost-row-muted">
            <span>Driver Profit</span>
            <strong>₹0</strong>
          </div>
          <div className="cost-row cost-row-total">
            <span>Passenger Contribution</span>
            <strong>₹340</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostTransparency;
