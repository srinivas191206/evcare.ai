import React from 'react';
import './Footer.css';
import { Globe, MessageCircle, Send, Share2, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* ... (keep newsletter row same) */}
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <h2 className="newsletter-text">Subscribe to learn about our latest news</h2>
          <div className="newsletter-input-wrapper">
            <input type="email" placeholder="Enter your email" />
            <button className="newsletter-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

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
