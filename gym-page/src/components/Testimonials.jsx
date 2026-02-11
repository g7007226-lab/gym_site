import React, { useState } from 'react';
import './Testimonials.css';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';
import { test1, test2, test3 } from '../assets/images';
import './Testimonials.css';
import LazyImage from './LazyImage';
import './Testimonials.css';
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Steven Haward",
      role: "Fitness Enthusiast",
      image: test1,
      content: "I've been using Fitmaker for the past three months, and I'm genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions.",
      rating: 5
    },
    
    {
      id: 3,
      name: "Mike Chen",
      role: "Bodybuilder",
      image: test2,
      content: "The equipment is state-of-the-art and the facilities are always clean. What sets FitMaker apart is their holistic approach to fitness. It's not just about working out; it's about building a sustainable, healthy lifestyle.",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Yoga Instructor",
      image: test3,
      content: "I love the variety of classes and the flexibility of the membership plans. The instructors are knowledgeable and create such a positive, motivating environment. I've made great friends here too!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials__bg">
        <div className="testimonials__gradient testimonials__gradient--1"></div>
        <div className="testimonials__gradient testimonials__gradient--2"></div>
      </div>

      <div className="container">
        <motion.div 
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials__title">
            <span className="text-white">What Our </span>
            <span className="text-red">Customers Say</span>
          </h2>
          <p className="testimonials__description">
            Real stories from real people who transformed their lives with FitMaker.
          </p>
        </motion.div>

        <div className="testimonials__content">
          <motion.div 
            className="testimonials__main"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-card__image">
                  <LazyImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                  <div className="testimonial-card__rating">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L10 5H14L11 8L12 12L8 10L4 12L5 8L2 5H6L8 1Z" fill="#FFD700"/>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-card__content">
                  <div className="testimonial-card__quote">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8L14.4 2.4H9.6C4.296 2.4 0 9.096 0 14.4V25.6H12.8V14.4H4.8C4.8 8 12 8 12 8ZM25.6 14.4C25.6 8 32 8 32 8L29.6 2.4H24.8C19.496 2.4 15.2 9.096 15.2 14.4V25.6H28V14.4H25.6Z" fill="#D90A14"/>
                    </svg>
                  </div>
                  
                  <p className="testimonial-card__text">{currentTestimonial.content}</p>
                  
                  <div className="testimonial-card__author">
                    <h4 className="author__name">{currentTestimonial.name}</h4>
                    <p className="author__role">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="testimonials__controls"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="controls__navigation">
              <button 
                className="nav-btn nav-btn--prev"
                onClick={prevTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 10H4.16667M4.16667 10L10 4.16667M4.16667 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="controls__indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'indicator--active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              
              <button 
                className="nav-btn nav-btn--next"
                onClick={nextTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div></section>
  );
};

export default Testimonials;
