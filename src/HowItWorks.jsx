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
      // Typing animation - re-triggers whenever entering the section
      const typingAnim = gsap.to({ charCount: 0 }, {
        charCount: text.length,
        duration: 1.5,
        ease: "none",
        onUpdate: function() {
          if (textRef.current) {
            textRef.current.textContent = text.slice(0, Math.floor(this.targets()[0].charCount));
          }
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          onEnter: () => typingAnim.restart(),
          onEnterBack: () => typingAnim.restart(),
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
