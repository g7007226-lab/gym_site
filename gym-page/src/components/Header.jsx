import React, { useState, useEffect } from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'plans', 'about', 'gallery', 'testimonials', 'trainers'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      }
    }, 100);
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <motion.div 
            className="header__logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="logo__icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35"/>
                    <stop offset="50%" stopColor="#D90A14"/>
                    <stop offset="100%" stopColor="#B8000F"/>
                  </linearGradient>
                  <linearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF"/>
                    <stop offset="100%" stopColor="#E0E0E0"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect x="3" y="12" width="6" height="12" rx="3" fill="url(#plateGradient)" filter="url(#glow)"/>
                <rect x="27" y="12" width="6" height="12" rx="3" fill="url(#plateGradient)" filter="url(#glow)"/>
                <rect x="9" y="15" width="18" height="6" rx="3" fill="url(#barGradient)" filter="url(#glow)"/>
                <circle cx="12" cy="18" r="4" fill="url(#plateGradient)" stroke="#D90A14" strokeWidth="1"/>
                <circle cx="24" cy="18" r="4" fill="url(#plateGradient)" stroke="#D90A14" strokeWidth="1"/>
                <circle cx="12" cy="18" r="2" fill="#D90A14"/>
                <circle cx="24" cy="18" r="2" fill="#D90A14"/>
              </svg>
            </div>
            <div className="logo__text">
              <h1>FitMaker</h1>
              <span>Fitness Studio</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="header__nav">
            <ul className="nav__list">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'plans', label: 'Plans' },
                { id: 'about', label: 'About Us' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'trainers', label: 'Trainers' }
              ].map((item) => (
                <li key={item.id} className="nav__item">
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div 
                        className="nav__dot"
                        layoutId="activeDot"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <motion.button 
            className="header__contact"
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contact__text">Contact Us</span>
            <div className="contact__icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <button 
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="header__mobile-menu"
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="mobile-nav">
            <ul className="mobile-nav__list">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'plans', label: 'Plans' },
                { id: 'about', label: 'About Us' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'trainers', label: 'Trainers' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav__link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={scrollToContact}
                  className="mobile-nav__contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div></motion.header>
  );
};

export default Header;
