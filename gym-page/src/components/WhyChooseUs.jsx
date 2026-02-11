import React from 'react';
import './WhyChooseUs.css';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L20 10H28L22 16L24 24L16 20L8 24L10 16L4 10H12L16 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "Expert Trainers",
      description: "Certified professionals with 5+ years experience in fitness training and nutrition coaching."
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4ZM16 26C10.5 26 6 21.5 6 16C6 10.5 10.5 6 16 6C21.5 6 26 10.5 26 16C26 21.5 21.5 26 16 26Z" fill="currentColor"/>
          <path d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 11.6 20.4 8 16 8ZM16 22C12.7 22 10 19.3 10 16C10 12.7 12.7 10 16 10C19.3 10 22 12.7 22 16C22 19.3 19.3 22 16 22Z" fill="currentColor"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance and guidance whenever you need help with your fitness journey."
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 8H4C2.9 8 2 8.9 2 10V22C2 23.1 2.9 24 4 24H28C29.1 24 30 23.1 30 22V10C30 8.9 29.1 8 28 8ZM28 22H4V10H28V22Z" fill="currentColor"/>
          <path d="M8 14H24V18H8V14Z" fill="currentColor"/>
        </svg>
      ),
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment and facilities to maximize your workout efficiency."
    },
    {
      id: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="currentColor"/>
          <path d="M22 12L14 20L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Proven Results",
      description: "Over 1000+ successful transformations with personalized workout and nutrition plans."
    },
    {
      id: 5,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L6 7V13C6 20.5 10.8 27.2 16 28C21.2 27.2 26 20.5 26 13V7L16 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "Flexible Plans",
      description: "Customizable membership plans that fit your schedule, budget, and fitness goals perfectly."
    },
    {
      id: 6,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L20 12H28L22 18L24 26L16 22L8 26L10 18L4 12H12L16 4Z" fill="currentColor"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      ),
      title: "Community Focus",
      description: "Join a supportive community of fitness enthusiasts who motivate and inspire each other."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="why-choose-us section">
      {/* Background Elements */}
      <div className="why-choose-us__bg">
        <div className="why-choose-us__gradient why-choose-us__gradient--1"></div>
        <div className="why-choose-us__gradient why-choose-us__gradient--2"></div>
      </div>

      <div className="container">
        <motion.div 
          className="why-choose-us__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="why-choose-us__title">
            <span className="text-white">Why Choose </span>
            <span className="text-red">FitMaker</span>
          </h2>
          <p className="why-choose-us__description">
            Discover what makes us the premier choice for fitness enthusiasts. 
            We're committed to helping you achieve your goals with excellence.
          </p>
        </motion.div>

        <motion.div 
          className="why-choose-us__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id}
              className="reason-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="reason-card__icon">
                {reason.icon}
              </div>
              <div className="reason-card__content">
                <h3 className="reason-card__title">{reason.title}</h3>
                <p className="reason-card__description">{reason.description}</p>
              </div>
              <div className="reason-card__glow"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="why-choose-us__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey Today</span>
            <div className="cta-button__icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L18 10L10 18M18 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.button>
        </motion.div>
      </div></section>
  );
};

export default WhyChooseUs;
