import React, { useEffect, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Percentage Counter Animation
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setPercentage(Math.floor(counter.val));
      },
      onComplete: () => {
        // Final transition out
        const tl = gsap.timeline();
        tl.to('.preloader-content', {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power3.in"
        })
        .to('.preloader-container', {
          y: '-100%',
          duration: 1,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });

    // Text Reveal Animation
    gsap.fromTo('.preloader-logo', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, [onComplete]);

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <h1 className="preloader-logo">EVcare<span className="dot">.</span>AI</h1>
          <p className="preloader-tagline">Intelligence Behind Every Ride</p>
        </div>
        
        <div className="preloader-footer">
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="percentage-display">
            <span className="current-percent">{percentage}</span>
            <span className="total-percent">/ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
