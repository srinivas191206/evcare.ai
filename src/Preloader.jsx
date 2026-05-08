import React, { useEffect, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

import { Bike, Wrench, Zap } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Percentage Counter Animation
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 3, // Slightly longer for more "repair" feel
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

    // Icon & Text Animation
    gsap.fromTo('.preloader-logo-wrapper', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo('.loading-icon', 
      { scale: 0.8, opacity: 0.5 }, 
      { scale: 1.1, opacity: 1, duration: 0.8, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
  }, [onComplete]);

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <h1 className="preloader-logo">EVcare<span className="dot">.</span>AI</h1>
          <p className="preloader-tagline">INTELLIGENCE BEHIND EVERY RIDE</p>
        </div>

        <div className="preloader-icons">
          <Wrench className="loading-icon icon-wrench" size={32} />
          <Bike className="loading-icon icon-bike" size={48} />
          <Zap className="loading-icon icon-zap" size={32} />
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
