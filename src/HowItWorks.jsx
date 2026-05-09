import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = "HOW EVcare.AI WORKS?";
    
    let ctx = gsap.context(() => {
      // Typing animation - re-triggers when section comes into view
      gsap.to({}, {
        duration: 1.5,
        onUpdate: function() {
          const progress = this.progress();
          const charCount = Math.floor(progress * text.length);
          if (textRef.current) {
            textRef.current.textContent = text.slice(0, charCount);
          }
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none none none"
        },
        onComplete: () => {
          // Only auto-scroll the first time the animation completes
          if (!window.hasAutoScrolledHIW) {
            window.hasAutoScrolledHIW = true;
            setTimeout(() => {
              const nextSection = document.querySelector('.dashboard-showcase');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 800);
          }
        }
      });

      // Existing zoom reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%", 
          pin: true,
          pinSpacing: false,
        }
      });

      tl.to(textRef.current, { scale: 1.5, opacity: 0, duration: 1 }, 0)
        .to(containerRef.current, { backgroundColor: "rgba(255, 255, 255, 0)", duration: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works-section" ref={containerRef}>
      <div className="hiw-content">
        <h2 ref={textRef} className="hiw-title brand-text typing-cursor"></h2>
      </div>
    </section>
  );
};

export default HowItWorks;
