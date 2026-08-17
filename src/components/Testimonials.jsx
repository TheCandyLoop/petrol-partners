import { testimonials } from '../data/testimonials';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Community Voices</span>
          <h2>What early partners are saying</h2>
          <p>Demo testimonials shown for illustration during the Beta.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card card" key={t.name}>
              <div className="testimonial-rating">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
