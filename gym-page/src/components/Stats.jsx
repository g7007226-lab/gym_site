import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      value: "96%",
      label: "Client Satisfaction",
      description: "Our members love their results and experience",
      color: "red"
    },
    {
      value: "5+",
      label: "Years of Experience",
      description: "Trust in our proven track record of transforming",
      color: "orange"
    },
    {
      value: "1000+",
      label: "Active Members",
      description: "Join our thriving fitness community",
      color: "red"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Expert assistance whenever you need it",
      color: "orange"
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="stats section">
      <div className="container">
        <motion.div 
          className="stats__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className="stats__item"
                variants={itemVariants}
              >
                <div className="stats__main">
                  <div className="stats__text">
                    <span className={`stats__value stats__value--${stat.color}`}>
                      {stat.value}
                    </span>
                    <span className="stats__label">{stat.label}</span>
                  </div>
                </div>
                <div className="stats__description">
                  {stat.description}
                </div>
              </motion.div>
              {index < stats.length - 1 && (
                <motion.div 
                  className="stats__divider"
                  variants={itemVariants}
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .stats {
          padding: 60px 0;
          background: var(--grey-900);
        }

        .stats__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .stats__item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .stats__main {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .stats__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .stats__value {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1;
        }

        .stats__value--red {
          color: var(--red-500);
        }

        .stats__value--orange {
          color: var(--orange-500);
        }

        .stats__label {
          font-size: 16px;
          font-weight: 500;
          color: var(--white);
          text-transform: capitalize;
          line-height: 1.2;
        }

        .stats__description {
          font-size: 14px;
          color: var(--white);
          opacity: 0.7;
          text-align: center;
          line-height: 1.4;
          text-transform: capitalize;
          max-width: 200px;
        }

        .stats__divider {
          width: 3px;
          height: 80px;
          background: linear-gradient(180deg, var(--red-500) 0%, var(--orange-500) 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .stats__content {
            gap: 30px;
          }

          .stats__value {
            font-size: clamp(28px, 5vw, 40px);
          }

          .stats__label {
            font-size: 14px;
          }

          .stats__description {
            font-size: 12px;
            max-width: 180px;
          }

          .stats__divider {
            height: 70px;
          }
        }

        @media (max-width: 768px) {
          .stats {
            padding: 50px 0;
          }

          .stats__content {
            flex-direction: column;
            gap: 40px;
          }

          .stats__divider {
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, var(--red-500) 0%, var(--orange-500) 100%);
          }

          .stats__item {
            width: 100%;
            max-width: 300px;
          }

          .stats__value {
            font-size: clamp(24px, 6vw, 36px);
          }

          .stats__label {
            font-size: 16px;
          }

          .stats__description {
            font-size: 14px;
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .stats {
            padding: 40px 0;
          }

          .stats__content {
            gap: 32px;
          }

          .stats__value {
            font-size: clamp(20px, 7vw, 32px);
          }

          .stats__label {
            font-size: 14px;
          }

          .stats__description {
            font-size: 12px;
            max-width: 220px;
          }

          .stats__divider {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;