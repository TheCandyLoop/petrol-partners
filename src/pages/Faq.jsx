import { useState } from 'react';
import { faqItems } from '../data/faq';
import './Faq.css';

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-page">
      <div className="container faq-content">
        <div className="faq-heading">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-tagline">
            Everything you need to know about fuel-sharing, verification, and how Petrol
            Partners works.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={item.question}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
