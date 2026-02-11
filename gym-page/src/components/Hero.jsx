import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { ser5, ser6, tr1 } from '../assets/images';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern gym with professional equipment" 
          className="hero__bg-image"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero__overlay"></div>
        <div className="hero__grid-pattern"></div>
      </div>

      <div className="container">
        <div className="hero__wrapper">
          <motion.div 
            className="hero__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge-dot"></span>
              <span className="badge-text">PREMIUM FITNESS EXPERIENCE</span>
            </motion.div>

            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              BUILD YOUR
              <span className="title-highlight"> DREAM BODY</span>
            </motion.h1>

            <motion.p 
              className="hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your fitness journey with expert trainers, cutting-edge equipment, 
              and personalized programs designed to deliver real results.
            </motion.p>

            <motion.div 
              className="hero__actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button 
                className="btn btn--primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              <motion.a 
                href="tel:+919876543210"
                className="btn btn--secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Call Us Now</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero__stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="stat-item">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Trainers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Gym Access</div>
              </div>
            </motion.div>

            <motion.div 
              className="hero__trust-badges"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
                </svg>
                <span>Certified Trainers</span>
              </div>
              <div className="trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#D90A14"/>
                </svg>
                <span>100% Safe</span>
              </div>
              <div className="trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#4CAF50" strokeWidth="2"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="#4CAF50" strokeWidth="2"/>
                </svg>
                <span>Proven Results</span>
              </div>
            </motion.div>
          </motion.div>

        <motion.div 
          className="hero__visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-images-grid">
            <motion.div 
              className="hero-image hero-image--large"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ser5} alt="Gym Training" loading="eager" />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>STRENGTH</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image hero-image--medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ser6} alt="Cardio Zone" loading="eager" />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>CARDIO</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image hero-image--small"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={tr1} alt="Personal Training" loading="eager" />
              <div className="image-overlay">
                <div className="overlay-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>TRAINING</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="floating-stat-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="stat-card-icon">🔥</div>
            <div className="stat-card-content">
              <div className="stat-card-number">2500+</div>
              <div className="stat-card-label">Calories Burned Daily</div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
