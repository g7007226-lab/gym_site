import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import { gal1, gal2, gal5, gal6, ser1, ser2, ser3, ser4 } from '../assets/images';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    { id: 1, src: gal1, category: 'gym', title: 'Training Area' },
    { id: 2, src: gal2, category: 'gym', title: 'Workout Zone' },
    { id: 3, src: gal5, category: 'gym', title: 'Fitness Studio' },
    { id: 4, src: gal6, category: 'gym', title: 'Gym Floor' },
    { id: 5, src: ser1, category: 'training', title: 'Personal Training' },
    { id: 6, src: ser2, category: 'training', title: 'Group Classes' },
    { id: 7, src: ser3, category: 'training', title: 'Fitness Sessions' },
    { id: 8, src: ser4, category: 'training', title: 'Workout Training' },
  ];

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'gym', label: 'Gym Floor' },
    { id: 'training', label: 'Training' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__bg">
        <div className="gallery__gradient gallery__gradient--1"></div>
        <div className="gallery__gradient gallery__gradient--2"></div>
      </div>

      <div className="container">
        <motion.div 
          className="gallery__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gallery__title">
            <span className="text-white">Our </span>
            <span className="text-red">Gallery</span>
          </h2>
          <p className="gallery__description">
            Take a virtual tour of our world-class facilities and see where champions train
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="gallery__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((item) => (
            <motion.button
              key={item.id}
              className={`filter-btn ${filter === item.id ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="gallery__grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="gallery__image-wrapper">
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <div className="gallery__overlay">
                    <h3 className="gallery__title-text">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>


    </section>
  );
};

export default Gallery;
