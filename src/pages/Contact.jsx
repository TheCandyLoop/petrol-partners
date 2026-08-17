import { useState } from 'react';
import './Contact.css';

const initialForm = { name: '', email: '', topic: 'General', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendAnother = () => {
    setFormData(initialForm);
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="container contact-content">
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p className="contact-tagline">
            Questions, feedback, or partnership ideas — we'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h2>Message sent.</h2>
                <p>Thanks for reaching out — our team will get back to you shortly.</p>
                <button type="button" className="btn btn-secondary" onClick={handleSendAnother}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange('name')}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-topic">Topic</label>
                  <select id="contact-topic" value={formData.topic} onChange={handleChange('topic')}>
                    <option value="General">General question</option>
                    <option value="Safety">Safety concern</option>
                    <option value="Verification">Verification issue</option>
                    <option value="Partnership">Partnership inquiry</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="card contact-info-card">
              <h3>Support</h3>
              <p>support@petrolpartners.example</p>
            </div>
            <div className="card contact-info-card">
              <h3>Safety Team</h3>
              <p>safety@petrolpartners.example</p>
            </div>
            <div className="card contact-info-card">
              <h3>Based in</h3>
              <p>Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
