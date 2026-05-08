import React, { useState } from 'react';
import './CallbackWidget.css';
import { Phone, X } from 'lucide-react';

const CallbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pinCode: ''
  });

  React.useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Callback requested:', formData);
    alert('Request received! We will call you back shortly.');
    setIsOpen(false);
  };

  return (
    <div className={`callback-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Floating Button */}
      <button className={`callback-trigger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        <Phone size={20} />
        <span>Request a call back</span>
      </button>

      {/* Popup Form */}
      <div className={`callback-popup ${isOpen ? 'active' : ''}`}>
        <div className="popup-header">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="popup-body">
          <h3 className="popup-title">Talk to us, directly.</h3>
          <p className="popup-subtitle">Drop your details & we'll reach out to you.</p>

          <form onSubmit={handleSubmit} className="callback-form">
            <div className="widget-form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name*" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="widget-form-group phone-input-group">
              <span className="country-code">+91</span>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone number*" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="widget-form-group">
              <input 
                type="text" 
                name="pinCode" 
                placeholder="Enter Pin Code or Area*" 
                value={formData.pinCode} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="widget-submit-btn">Submit</button>

            <p className="policy-text">
              By clicking on 'Submit' you are agreeing to our <span>Privacy Policy</span> and are allowing us (EVcare.AI) and our service partners to get in touch with you.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackWidget;
