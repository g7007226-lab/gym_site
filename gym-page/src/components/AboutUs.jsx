import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import { aboutImage, equ1, equ2, equ3, equ4 } from '../assets/images';
import FastImage from './FastImage';

const AboutUs = () => {
  const stats = [
    { 
      value: "10K+", 
      label: "Active Members",
      icon: <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/></svg>
    },
    { 
      value: "50+", 
      label: "Expert Trainers",
      icon: <svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      value: "15+", 
      label: "Years Experience",
      icon: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      value: "24/7", 
      label: "Gym Access",
      icon: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    }
  ];

  const features = [
    "State-of-the-Art Equipment",
    "Certified Personal Trainers",
    "World-Class Facilities",
    "Nutrition Guidance",
    "Group Fitness Classes",
    "Personal Training Sessions",
    "Cardio & Strength Zones",
    "Steam & Sauna Access"
  ];



  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-badge">ABOUT FITMAKER</span>
          <h2 className="about-title">
            WHERE <span className="highlight">CHAMPIONS</span> ARE MADE
          </h2>
          <p className="about-subtitle">
            FitMaker is more than just a gym—it's a lifestyle revolution. Since 2009, we've been transforming lives with cutting-edge fitness programs and world-class equipment. With 10,000+ members and 50+ certified trainers, we deliver results that last.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-container">
              <FastImage src={aboutImage} alt="FitMaker Gym" />
              <div className="image-gradient"></div>
              <motion.div 
                className="floating-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="badge-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <div className="badge-title">15 YEARS</div>
                  <div className="badge-subtitle">Since 2009</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="gym-images-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid-image">
                <FastImage src={equ1} alt="Gym Equipment" />
              </div>
              <div className="grid-image">
                <FastImage src={equ2} alt="Gym Facility" />
              </div>
              <div className="grid-image">
                <FastImage src={equ3} alt="Training Area" />
              </div>
              <div className="grid-image">
                <FastImage src={equ4} alt="Fitness Zone" />
              </div>
            </motion.div>
          </motion.div>

          <div className="about-info">
            <motion.div 
              className="stats-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="features-list"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="features-heading">What We Offer</h3>
              <div className="features-points">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="feature-point"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </div>
        </div>

        <motion.div 
          className="mission-vision"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>To empower individuals to achieve their fitness goals through world-class facilities, expert guidance, and a supportive community that inspires transformation.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>To be India's most trusted fitness destination, setting new standards in health and wellness while building a nation of stronger, healthier, and happier individuals.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Story</h3>
            <p>Founded in 2009, FitMaker started with a simple dream: to create a fitness space where everyone feels welcome. Today, we're proud to serve 10,000+ members across the nation.</p>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default AboutUs;
