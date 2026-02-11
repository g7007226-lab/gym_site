import React, { useState } from 'react';
import './Trainers.css';
import { motion } from 'framer-motion';
import './Trainers.css';
import { tr1, tr2, tr3, tr4 } from '../assets/images';
import './Trainers.css';
import LazyImage from './LazyImage';
import './Trainers.css';
const Trainers = () => {
  const [activeTrainer, setActiveTrainer] = useState(0);

  const trainers = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Personal Trainer",
      image: tr1,
      specialty: "Strength Training & Muscle Building",
      experience: "5+ Years",
      rating: 4.9,
      certifications: ["NASM Certified", "Strength & Conditioning", "Nutrition Specialist"],
      achievements: "500+ Clients Transformed",
      description: "Expert in building lean muscle and strength training programs for all fitness levels."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Yoga Instructor",
      image: tr2,
      specialty: "Wellness & Flexibility Training",
      experience: "6+ Years",
      rating: 4.8,
      certifications: ["RYT 500 Certified", "Meditation Teacher", "Wellness Coach"],
      achievements: "1000+ Hours Teaching",
      description: "Specializes in yoga, meditation, and holistic wellness for mind-body balance."
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "HIIT Specialist",
      image: tr3,
      specialty: "High-Intensity Interval Training",
      experience: "7+ Years",
      rating: 5.0,
      certifications: ["ACSM Certified", "HIIT Specialist", "Functional Training"],
      achievements: "Top Rated Trainer 2023",
      description: "Expert in fat burning workouts and high-intensity training for maximum results."
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "Nutrition Coach",
      image: tr4,
      specialty: "Nutrition & Meal Planning",
      experience: "8+ Years",
      rating: 4.9,
      certifications: ["Registered Dietitian", "Sports Nutrition", "Weight Management"],
      achievements: "300+ Success Stories",
      description: "Creates personalized nutrition plans for weight loss, muscle gain, and optimal health."
    }
  ];

  return (
    <section id="trainers" className="trainers section">
      <div className="trainers__bg">
        <div className="trainers__gradient"></div>
      </div>

      <div className="container">
        <motion.div 
          className="trainers__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="trainers__title">
            <span className="text-white">Meet Our </span>
            <span className="text-red">Expert Trainers</span>
          </h2>
        </motion.div>

        <div className="trainers__content">
          <motion.div 
            className="trainers__main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="trainer-showcase">
              <div className="trainer-showcase__image">
                <LazyImage src={trainers[activeTrainer].image} alt={trainers[activeTrainer].name} />
                <div className="trainer-showcase__rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L10 5H14L11 8L12 12L8 10L4 12L5 8L2 5H6L8 1Z" fill="#FFD700"/>
                  </svg>
                  <span>{trainers[activeTrainer].rating}</span>
                </div>
              </div>
              <div className="trainer-showcase__info">
                <h3 className="trainer-name">{trainers[activeTrainer].name}</h3>
                <p className="trainer-role">{trainers[activeTrainer].role}</p>
                <p className="trainer-specialty">{trainers[activeTrainer].specialty}</p>
                <p className="trainer-description">{trainers[activeTrainer].description}</p>
                <div className="trainer-certifications">
                  <h4>Certifications:</h4>
                  <div className="cert-badges">
                    {trainers[activeTrainer].certifications.map((cert, index) => (
                      <span key={index} className="cert-badge">{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="trainer-stats">
                  <div className="stat-item">
                    <span className="stat-label">Experience:</span>
                    <span className="stat-value">{trainers[activeTrainer].experience}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Achievement:</span>
                    <span className="stat-value">{trainers[activeTrainer].achievements}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="trainers__list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                className={`trainer-item ${index === activeTrainer ? 'trainer-item--active' : ''}`}
                onClick={() => setActiveTrainer(index)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="trainer-item__avatar">
                  <LazyImage src={trainer.image} alt={trainer.name} />
                </div>
                <div className="trainer-item__info">
                  <h4>{trainer.name}</h4>
                  <p>{trainer.role}</p>
                </div>
                <div className="trainer-item__indicator"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div></section>
  );
};

export default Trainers;
