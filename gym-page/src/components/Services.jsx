import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import './Services.css';
import { ser1, ser2, ser3, ser4, ser5, ser6 } from '../assets/images';
import './Services.css';
import OptimizedImage from './OptimizedImage';
import './Services.css';
const Services = () => {
  const services = [
    {
      id: 1,
      image: ser1,
      title: "Zumba Dance",
      description: "High-energy Latin dance fitness that burns calories"
    },
    {
      id: 2,
      image: ser2,
      title: "CrossFit Training",
      description: "Intense functional movements for total body strength"
    },
    {
      id: 3,
      image: ser3,
      title: "HIIT Bootcamp",
      description: "High-intensity interval training for rapid fat loss"
    },
    {
      id: 4,
      image: ser4,
      title: "Powerlifting",
      description: "Master the big three: squat, bench, deadlift"
    },
    {
      id: 5,
      image: ser5,
      title: "Hot Yoga",
      description: "Heated yoga sessions for flexibility and detox"
    },
    {
      id: 6,
      image: ser6,
      title: "Boxing Classes",
      description: "Learn boxing techniques while getting shredded"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="services section">
      <div className="services__bg">
        <div className="services__gradient"></div>
      </div>

      <div className="container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services__title">
            <span className="text-white">Epic </span>
            <span className="text-red">Classes</span>
          </h2>
          <p className="services__description">
            From Zumba dance parties to hardcore CrossFit - find your perfect workout vibe.
          </p>
        </motion.div>

        <motion.div 
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="service-card__image">
                <OptimizedImage 
                  src={service.image} 
                  alt={service.title}
                  width={400}
                  height={360}
                  quality={70}
                />
                <div className="service-card__overlay">
                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <div className="service-card__features">
                      <div className="feature-badge">Premium</div>
                      <div className="service-rating">
                        <span className="rating-stars">★★★★★</span>
                        <span className="rating-text">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div></section>
  );
};

export default Services;
