import { useNavigate } from 'react-router-dom';
import { popularRoutes } from '../data/routes';
import './PopularRoutes.css';

function PopularRoutes() {
  const navigate = useNavigate();

  const goToRoute = (from, to) => {
    const params = new URLSearchParams({ pickup: from, destination: to });
    navigate(`/find-ride?${params.toString()}`);
  };

  return (
    <section className="section popular-routes">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Popular Maharashtra Routes</span>
          <h2>Well-travelled routes with active partners</h2>
        </div>

        <div className="popular-routes-grid">
          {popularRoutes.map((route) => (
            <button
              className="popular-route-card"
              key={`${route.from}-${route.to}`}
              onClick={() => goToRoute(route.from, route.to)}
            >
              <div className="popular-route-cities">
                <span>{route.from}</span>
                <span className="popular-route-arrow">→</span>
                <span>{route.to}</span>
              </div>
              <div className="popular-route-meta">
                <span>{route.distance}</span>
                <span className="popular-route-dot">•</span>
                <span>from {route.avgContribution}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularRoutes;
