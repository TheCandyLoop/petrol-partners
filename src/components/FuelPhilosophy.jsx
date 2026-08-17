import './FuelPhilosophy.css';

const points = [
  {
    icon: '⛽',
    title: 'Share Fuel, Not Profit',
    description:
      'Petrol Partners is built around actual travel cost sharing. Drivers are already making the trip — passengers simply contribute toward the real fuel and toll cost, never more.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Travel',
    description:
      'Every shared journey means one less vehicle on the road. Filling empty seats reduces fuel consumption, congestion, and emissions across Maharashtra\u2019s highways.',
  },
];

function FuelPhilosophy() {
  return (
    <section className="section philosophy">
      <div className="container">
        <div className="philosophy-grid">
          {points.map((point) => (
            <div className="philosophy-card" key={point.title}>
              <div className="philosophy-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FuelPhilosophy;
