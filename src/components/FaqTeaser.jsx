import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqItems } from '../data/faq';
import './FaqTeaser.css';

function FaqTeaser() {
  const [openIndex, setOpenIndex] = useState(0);
  const items = faqItems.slice(0, 5);

  return (
    <section className="section faq-teaser">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">FAQ</span>
          <h2>Common questions</h2>
        </div>

        <div className="faq-teaser-list">
          {items.map((item, index) => (
            <div className="faq-teaser-item" key={item.question}>
              <button
                className="faq-teaser-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-teaser-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <p className="faq-teaser-answer">{item.answer}</p>}
            </div>
          ))}
        </div>

        <div className="faq-teaser-more">
          <Link to="/faq" className="btn btn-secondary">
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FaqTeaser;
