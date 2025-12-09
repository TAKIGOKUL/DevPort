import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import BackgroundEffect from './components/BackgroundEffect';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.35, // 35% of normal speed
      wheelMultiplier: 0.35, // 35% of normal speed
      smoothTouch: false,
      touchMultiplier: 0.35,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Lenis cleanup if needed, though usually global on body is fine
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <BackgroundEffect />
          <Cursor />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
