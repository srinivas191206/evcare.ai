import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline for the reveal effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%", // Duration of the pin/reveal
          scrub: 1, // Smooth scrub
          pin: true,
          pinSpacing: false, // Magic: This prevents pushing the next section down!
        }
      });

      // Zoom the text and fade out the entire section's background and content
      tl.to(textRef.current, { scale: 1.5, opacity: 0, duration: 1 }, 0)
        .to(containerRef.current, { backgroundColor: "rgba(255, 255, 255, 0)", duration: 1 }, 0);
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="how-it-works-section" ref={containerRef}>
      <div className="hiw-content">
        <h2 ref={textRef} className="hiw-title brand-text">HOW EVcare.AI WORKS</h2>
      </div>
    </section>
  );
};

export default HowItWorks;
