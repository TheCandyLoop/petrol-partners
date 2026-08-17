import './FuelBreakdown.css';

function FuelBreakdown({ fuelCost, tollCost, contribution }) {
  return (
    <div className="fuel-breakdown card">
      <h3 className="fuel-breakdown-title">Fuel Transparency</h3>

      <div className="fuel-breakdown-rows">
        <div className="fuel-breakdown-row">
          <span>Fuel Cost</span>
          <span>₹{fuelCost}</span>
        </div>
        <div className="fuel-breakdown-row">
          <span>Toll Cost</span>
          <span>₹{tollCost}</span>
        </div>
        <div className="fuel-breakdown-row">
          <span>Platform Fee</span>
          <span className="fuel-breakdown-zero">₹0</span>
        </div>
        <div className="fuel-breakdown-row">
          <span>Driver Profit</span>
          <span className="fuel-breakdown-zero">₹0</span>
        </div>
        <div className="fuel-breakdown-row fuel-breakdown-total">
          <span>Your Contribution</span>
          <span>₹{contribution}</span>
        </div>
      </div>

      <p className="fuel-breakdown-note">
        Only fuel-sharing allowed. Profit-making is not permitted.
      </p>
    </div>
  );
}

export default FuelBreakdown;
