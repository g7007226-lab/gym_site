import React, { Suspense, lazy } from 'react';
import './App.css';

// Critical components (loaded immediately)
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Preload critical images
import { heroImage, ser1, ser2, ser3, ser4, ser5, ser6, equ1, equ2, equ3, equ4, equ5, equ6, test1, test2, test3, tr1, tr2, tr3, tr4 } from './assets/images';

// Lazy loaded components
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Plans = lazy(() => import('./components/Plans'));
const FitnessTools = lazy(() => import('./components/FitnessTools'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Trainers = lazy(() => import('./components/Trainers'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Marquee = lazy(() => import('./components/Marquee'));
const BMICalculator = lazy(() => import('./components/BMICalculator'));
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  // Preload critical images on mount
  React.useEffect(() => {
    const preloadImages = () => {
      const criticalImages = [heroImage];
      const lazyImages = [ser1, ser2, ser3, ser4, ser5, ser6, equ1, equ2, equ3, equ4, equ5, equ6, test1, test2, test3, tr1, tr2, tr3, tr4];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
      setTimeout(() => {
        lazyImages.forEach((src, index) => {
          setTimeout(() => {
            const img = new Image();
            img.src = src;
          }, index * 100);
        });
      }, 2000);
    };

    preloadImages();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{height: '100px'}} />}>
          <AboutUs />
          <Marquee />
          <Stats />
          <Services />
          <BMICalculator />
          <Plans />
          <Gallery />
          <FitnessTools />
          <Testimonials />
          <Trainers />
          <WhyChooseUs />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
