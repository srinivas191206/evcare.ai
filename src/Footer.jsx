import React, { useState } from 'react';
import './Footer.css';
import { Globe, MessageCircle, Send, Share2, Phone, Mail, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwyVVrAfVlde6dh6gbZubopoazG7VCNCoHhCY_leFxsnhuFNJDjVKQS7_GKjbRvIW0U/exec';

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'subscriber',
          email: email
        }),
      });

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('idle');
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <h2 className="newsletter-text">
            {status === 'success' ? 'Thank you for subscribing!' : 'Subscribe to learn about our latest news'}
          </h2>
          <form className="newsletter-input-wrapper" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder={status === 'success' ? 'Subscription active' : 'Enter your email'} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
            />
            <button className="newsletter-btn" type="submit" disabled={status === 'loading' || status === 'success'}>
              {status === 'loading' ? (
                <div className="spinner-small"></div>
              ) : status === 'success' ? (
                <Check size={24} color="#10b981" />
              ) : (
                <Send size={24} />
              )}
            </button>
          </form>
        </div>
      </div>
      {/* ... (rest of footer) */}

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main-content">
        <div className="footer-grid">
          {/* LOGO & BRAND */}
          <div className="footer-brand">
            <h2 className="footer-logo">EVcare.AI</h2>
            <p className="brand-tagline">Intelligence Behind Every Ride</p>
            <div className="brand-hq">
              <p>Headquarters:</p>
              <span>Visakhapatnam, Andhra Pradesh</span>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#services">EV Battery</a></li>
              <li><a href="#services">EV Rental</a></li>
              <li><a href="#services">EV Fleet</a></li>
              <li><a href="#services">EV Charging</a></li>
              <li><a href="#services">EV Spares</a></li>
              <li><a href="#services">EV Insurance</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#about">Why EVcare</a></li>
              <li><a href="#about">Our Network</a></li>
              <li><a href="#about">Franchise</a></li>
              <li><a href="#about">Careers</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="footer-column footer-contact">
            <div className="social-links">
              <Globe size={20} className="social-icon" />
              <MessageCircle size={20} className="social-icon" />
              <Send size={20} className="social-icon" />
              <Share2 size={20} className="social-icon" />
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>support@evcare.ai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>Copyright © 2026 InnoVibe EVcare.AI Mobility Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
