import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Battery, ShieldAlert, Cpu } from 'lucide-react';
import './App.css';
import EVModel from './EVModel';
import Header from './Header';
import WhyCareEV from './WhyCareEV';
import EnquiryForm from './EnquiryForm';
import DashboardShowcase from './DashboardShowcase';
import SavingsCalculator from './SavingsCalculator';
import Services from './Services';
import HowItWorks from './HowItWorks';
import AppShowcase from './AppShowcase';
import CallbackWidget from './CallbackWidget';
import Footer from './Footer';
import heroImg from './assets/header.png';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const scrollBlurRef = useRef(null);

  useEffect(() => {
    // Animate the feature blocks appearing as you scroll
    const features = gsap.utils.toArray('.feature-block');
    
    features.forEach((feature) => {
      gsap.to(feature, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: feature,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    if (scrollBlurRef.current) {
      gsap.to(scrollBlurRef.current, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-main',
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="app-container" ref={containerRef}>
      <Header />
      
      {/* Scrollable Content Layers */}
      <div className="content-container">
        
        <section className="section hero hero-main">
          <img src={heroImg} alt="EVcare.AI" className="hero-background" />
          <div className="hero-overlay"></div>
          <div className="hero-edge-blur"></div>
          <div className="hero-scroll-blur" ref={scrollBlurRef}></div>
          
          <div className="hero-content">
            <h1 className="hero-title fade-in-up brand-text">India's Premier AI-Driven<br />EV Support Ecosystem</h1>
            <p className="hero-subtitle fade-in-up delay-1">Intelligent EV diagnostics and mobility support powered by AI.</p>
            <a href="#services" className="hero-btn fade-in-up delay-2">Explore Solutions</a>
          </div>
        </section>

        <div id="features"><HowItWorks /></div>
        <div id="diagnostics"><DashboardShowcase /></div>
        <div id="savings"><SavingsCalculator /></div>
        <div id="services"><Services /></div>
        
        <div id="fleet"><AppShowcase /></div>
        <div id="about"><WhyCareEV /></div>
        <div id="enquiry"><EnquiryForm /></div>
        <CallbackWidget />
        <Footer />

      </div>
    </div>
  );
}

export default App;
