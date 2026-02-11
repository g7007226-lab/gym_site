import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { equ1, equ2, equ3, equ4, equ5, equ6 } from '../assets/images';
import LazyImage from './LazyImage';
const FitnessTools = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tools = [
    {
      id: 1,
      name: "Treadmills",
      image: equ1,
      category: "Cardio",
      caption: "Train with premium machines for best results"
    },
    {
      id: 2,
      name: "Free Weights",
      image: equ2,
      category: "Strength",
      caption: "Build strength with professional-grade equipment"
    },
    {
      id: 3,
      name: "Cable Machines",
      image: equ3,
      category: "Functional",
      caption: "Functional training for real-world strength"
    },
    {
      id: 4,
      name: "Rowing Machines",
      image: equ4,
      category: "Cardio",
      caption: "Full-body cardio with premium rowing machines"
    },
    {
      id: 5,
      name: "Elliptical Trainers",
      image: equ5,
      category: "Cardio",
      caption: "Low-impact cardio for all fitness levels"
    },
    {
      id: 6,
      name: "Smith Machines",
      image: equ6,
      category: "Strength",
      caption: "Safe and controlled strength training"
    }
  ];

  return (
    <section className="fitness-tools section">
      <div className="fitness-tools__bg">
        <div className="fitness-tools__gradient"></div>
      </div>

      <div className="container">
        <motion.div 
          className="fitness-tools__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fitness-tools__title">
            <span className="text-white">Premium </span>
            <span className="text-red">Equipment</span>
          </h2>
        </motion.div>

        <motion.div 
          className="fitness-tools__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className={`tool-card ${index === activeIndex ? 'tool-card--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="tool-card__image">
                <LazyImage src={tool.image} alt={tool.name} />
                <div className="tool-card__overlay">
                  <div className="tool-card__category">{tool.category}</div>
                  <h3 className="tool-card__name">{tool.name}</h3>
                  <p className="tool-card__caption">{tool.caption}</p>
                  <div className="tool-card__specs">
                    <div className="spec-item">
                      <span className="spec-icon">🔥</span>
                      <span className="spec-text">High Intensity</span>
                    </div>
                    <div className="availability-status">
                      <div className="status-dot"></div>
                      <span className="status-text">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .fitness-tools {
          position: relative;
          padding: var(--section-padding) 0;
          background: var(--grey-900);
        }

        .fitness-tools__bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .fitness-tools__gradient {
          width: 600px;
          height: 300px;
          background: #77060B;
          filter: blur(150px);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.4;
        }

        .fitness-tools__header {
          text-align: center;
          margin-bottom: 60px;
        }

        .fitness-tools__title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          margin: 0;
        }

        .fitness-tools__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .tool-card {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tool-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(217, 10, 20, 0.2);
          border-color: rgba(217, 10, 20, 0.3);
        }

        .tool-card--active {
          border-color: var(--red-500);
          box-shadow: 0 15px 30px rgba(217, 10, 20, 0.3);
        }

        .tool-card__image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .tool-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .tool-card:hover .tool-card__image img {
          transform: scale(1.1);
        }

        .tool-card__overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
          padding: 30px 20px 20px;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .tool-card:hover .tool-card__overlay {
          transform: translateY(0);
        }

        .tool-card__category {
          font-size: 12px;
          color: var(--red-500);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .tool-card__name {
          font-size: 20px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 8px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .tool-card__caption {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 16px 0;
          line-height: 1.4;
        }

        .tool-card__specs {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .spec-icon {
          font-size: 14px;
        }

        .spec-text {
          font-size: 12px;
          color: #FF6B35;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #00FF88;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
          animation: pulse 2s infinite;
        }

        .status-text {
          font-size: 11px;
          color: #00FF88;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .fitness-tools {
            padding: 60px 0;
          }

          .fitness-tools__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .tool-card {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .fitness-tools {
            padding: 40px 0;
          }

          .fitness-tools__grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .tool-card {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default FitnessTools;