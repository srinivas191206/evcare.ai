import { useState } from 'react';
import './EnquiryForm.css';
import scooterBg from './assets/enquiry_hero_scooter.png';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'owner',
    companyName: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will get back to you soon.');
  };

  return (
    <section className="enquiry-section-modern" id="enquiry">
      {/* Background Image Layer */}
      <div className="enquiry-bg-container">
        <img src={scooterBg} alt="EVcare Studio" className="enquiry-scooter-img" />
        <div className="enquiry-gradient-overlay"></div>
      </div>

      <div className="enquiry-content-wrapper">
        <div className="enquiry-grid-modern">
          
          {/* LEFT: COMPACT SQUARE CONTACT CARD */}
          <div className="enquiry-form-card">
            <h3 className="popup-title">Connect with EVcare.AI</h3>
            <p className="popup-subtitle">Solutions for individual owners and fleets.</p>

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-grid-row">
                <div className="modern-form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="modern-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter your email ID" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-grid-row">
                <div className="modern-form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="modern-form-group">
                  <label className="accent-label">I AM AN</label>
                  <select name="userType" value={formData.userType} onChange={handleChange} className="modern-select">
                    <option value="owner">Individual EV Owner</option>
                    <option value="fleet">EV Fleet Operator</option>
                  </select>
                </div>
              </div>

              {formData.userType !== 'owner' && (
                <div className="modern-form-group">
                  <label>Company Name</label>
                  <input type="text" name="companyName" placeholder="Your Company Ltd." value={formData.companyName} onChange={handleChange} required />
                </div>
              )}

              <div className="modern-form-group">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows="2"></textarea>
              </div>

              <button type="submit" className="modern-submit-btn">Send Enquiry</button>
            </form>
          </div>

          {/* RIGHT: WORLD-CLASS TYPOGRAPHY */}
          <div className="enquiry-text-modern">
            <h2 className="enquiry-title-modern">
              <span className="line-break">Ready to transform your</span>
              <span className="green-highlight">EV experience?</span>
            </h2>
            <p className="enquiry-desc-modern">
              Whether you're an individual owner or managing a large fleet, EVcare.AI has the intelligent solutions you need.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
