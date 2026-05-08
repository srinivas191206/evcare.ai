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
      duration: 3.5,
      ease: "power1.inOut",
      onUpdate: () => {
        setPercentage(Math.floor(counter.val));
      }
    });

    // Bike Travel Animation (Curved Path)
    gsap.fromTo('.bike-traveler', 
      { 
        x: '-10vw', 
        y: '20px',
        opacity: 0,
        rotate: -5
      }, 
      { 
        x: '110vw', 
        y: '-20px', // Creates a subtle curve up
        opacity: 1,
        rotate: 5,
        duration: 3.5,
        ease: "power1.inOut",
        onComplete: () => {
          const tl = gsap.timeline();
          tl.to('.preloader-container', {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onComplete
          });
        }
      }
    );

    // Initial Logo Reveal
    gsap.fromTo('.preloader-logo-wrapper', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, [onComplete]);

  return (
    <div className="preloader-container light-theme">
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <h1 className="preloader-logo">EVcare<span className="dot">.</span>AI</h1>
          <p className="preloader-tagline">INTELLIGENCE BEHIND EVERY RIDE</p>
        </div>

        <div className="bike-path">
          <div className="bike-traveler">
            <Bike size={64} strokeWidth={1.5} />
            <div className="bike-trail"></div>
          </div>
        </div>
        
        <div className="preloader-footer">
          <div className="percentage-row">
            <span className="percent-num">{percentage}%</span>
            <div className="loading-bar-full">
              <div className="loading-bar-progress" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
          <p className="loading-status">INITIALIZING SYSTEMS...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
