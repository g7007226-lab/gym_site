import React, { useState } from 'react';
import './Plans.css';
import { motion } from 'framer-motion';
import './Plans.css';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Starter",
      type: "Membership",
      price: isAnnual ? 3999 : 799,
      currency: "month",
      description: "Perfect for beginners! Use all gym equipment and join group classes to get fit.",
      features: [
        "Use all gym equipment",
        "Join group classes",
        "Free locker",
        "Basic workout plan",
        "Health tips",
        "Body checkup"
      ],
      color: "orange",
      borderColor: "var(--orange-500)",
      buttonColor: "var(--orange-500)"
    },
    {
      id: 2,
      name: "Popular",
      type: "Membership",
      price: isAnnual ? 7999 : 999,
      currency: "month",
      description: "Most people choose this! Get your own trainer and custom meal plan for faster results.",
      features: [
        "Everything in Starter",
        "Personal trainer (2x per week)",
        "Custom meal plan",
        "Steam room & sauna",
        "Monthly progress check",
        "Free protein shake"
      ],
      color: "red",
      borderColor: "var(--red-500)",
      buttonColor: "var(--red-500)",
      popular: true
    },
    {
      id: 3,
      name: "Premium",
      type: "Membership",
      price: isAnnual ? 14999 : 1999,
      currency: "month",
      description: "The ultimate experience! Daily training, nutrition expert, and VIP treatment.",
      features: [
        "Everything in Popular",
        "Daily personal trainer",
        "Nutrition expert",
        "VIP locker room",
        "Weekly massage",
        "Free supplements",
        "Bring 2 friends/month"
      ],
      color: "orange",
      borderColor: "var(--orange-500)",
      buttonColor: "var(--orange-500)"
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="plans" className="plans section">
      {/* Background gradients */}
      <div className="plans__bg">
        <div className="plans__gradient plans__gradient--left"></div>
        <div className="plans__gradient plans__gradient--center"></div>
        <div className="plans__gradient plans__gradient--right"></div>
      </div>

      <div className="container">
        <motion.div 
          className="plans__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="plans__title">
            <span className="text-white">Simple </span>
            <span className="text-red">Pricing</span>
          </h2>
          <p className="plans__description">
            Pick what works for you. Start small or go big - we'll help you reach your goals!
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <div className="billing-toggle__container">
              <div className={`billing-toggle__slider ${isAnnual ? 'billing-toggle__slider--annual' : ''}`}></div>
              <button 
                className={`billing-toggle__option ${!isAnnual ? 'billing-toggle__option--active' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button 
                className={`billing-toggle__option ${isAnnual ? 'billing-toggle__option--active' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annually
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="plans__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ borderColor: plan.borderColor }}
            >
              {plan.popular && (
                <div className="plan-card__badge">Most Popular</div>
              )}
              {plan.id === 1 && (
                <div className="plan-card__badge plan-card__badge--value">Best Value</div>
              )}

              <div className="plan-card__header">
                <div className="plan-card__type" style={{ color: plan.color === 'red' ? 'var(--red-500)' : 'var(--orange-500)' }}>
                  {plan.type}
                </div>
                <h3 className="plan-card__name">{plan.name}</h3>
              </div>

              <div className="plan-card__price">
                <span className="plan-card__price-value">₹{plan.price}</span>
                <span className="plan-card__price-currency">/{plan.currency}</span>
                <div className="plan-card__price-daily">
                  ₹{Math.round(plan.price / 30)}/day
                </div>
              </div>

              <div className="plan-card__description-section">
                <div className="plan-card__section-title" style={{ color: plan.color === 'red' ? 'var(--red-500)' : 'var(--orange-500)' }}>
                  Description
                </div>
                <p className="plan-card__description">{plan.description}</p>
              </div>

              <div className="plan-card__features-section">
                <div className="plan-card__section-title" style={{ color: plan.color === 'red' ? 'var(--red-500)' : 'var(--orange-500)' }}>
                  Features
                </div>
                <ul className="plan-card__features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button 
                className="btn btn-large plan-card__button"
                style={{ backgroundColor: plan.buttonColor }}
              >
                Choose This Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div></section>
  );
};

export default Plans;
