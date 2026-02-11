import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <section className="bmi-calculator">
      <div className="container">
        <motion.div
          className="bmi-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Calculate Your BMI</h2>
          <p>Check your Body Mass Index and start your fitness journey</p>
        </motion.div>

        <div className="bmi-content">
          <motion.form
            className="bmi-form"
            onSubmit={calculateBMI}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                required
              />
            </div>
            <div className="form-group">
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-calculate">Calculate</button>
              <button type="button" onClick={reset} className="btn-reset">Reset</button>
            </div>
          </motion.form>

          <motion.div
            className="bmi-result"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {bmi ? (
              <>
                <div className="result-value">
                  <span className="bmi-number">{bmi}</span>
                  <span className="bmi-label">BMI</span>
                </div>
                <div className={`result-category ${category.toLowerCase()}`}>
                  {category}
                </div>
                <div className="bmi-scale">
                  <div className="scale-item">
                    <div className="scale-bar underweight"></div>
                    <span className="scale-label">Underweight</span>
                    <span className="scale-range">Below 18.5</span>
                  </div>
                  <div className="scale-item">
                    <div className="scale-bar normal"></div>
                    <span className="scale-label">Normal</span>
                    <span className="scale-range">18.5 - 25</span>
                  </div>
                  <div className="scale-item">
                    <div className="scale-bar overweight"></div>
                    <span className="scale-label">Overweight</span>
                    <span className="scale-range">25 - 30</span>
                  </div>
                  <div className="scale-item">
                    <div className="scale-bar obese"></div>
                    <span className="scale-label">Obese</span>
                    <span className="scale-range">Above 30</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="result-placeholder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  <path d="M40 20v40M20 40h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p>Enter your details to calculate BMI</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bmi-calculator {
          padding: 80px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        .bmi-calculator::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(217, 10, 20, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .bmi-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .bmi-header h2 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 16px 0;
        }

        .bmi-header p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .bmi-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        .bmi-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #FFFFFF;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #D90A14;
          background: rgba(255, 255, 255, 0.12);
        }

        .form-actions {
          display: flex;
          gap: 12px;
        }

        .btn-calculate, .btn-reset {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-calculate {
          background: linear-gradient(135deg, #D90A14, #FF6B35);
          color: #FFFFFF;
        }

        .btn-calculate:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(217, 10, 20, 0.4);
        }

        .btn-reset {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-reset:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .bmi-result {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .result-value {
          margin-bottom: 20px;
        }

        .bmi-number {
          display: block;
          font-size: 64px;
          font-weight: 900;
          background: linear-gradient(135deg, #D90A14, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bmi-label {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 8px;
        }

        .result-category {
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .result-category.underweight {
          background: rgba(59, 130, 246, 0.2);
          color: #60A5FA;
        }

        .result-category.normal {
          background: rgba(34, 197, 94, 0.2);
          color: #4ADE80;
        }

        .result-category.overweight {
          background: rgba(251, 146, 60, 0.2);
          color: #FB923C;
        }

        .result-category.obese {
          background: rgba(239, 68, 68, 0.2);
          color: #F87171;
        }

        .bmi-scale {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
        }

        .scale-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .scale-bar {
          height: 10px;
          border-radius: 5px;
          margin-bottom: 8px;
        }

        .scale-bar.underweight { background: #60A5FA; }
        .scale-bar.normal { background: #4ADE80; }
        .scale-bar.overweight { background: #FB923C; }
        .scale-bar.obese { background: #F87171; }

        .scale-label {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .scale-range {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
        }

        .result-placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .result-placeholder svg {
          margin-bottom: 20px;
        }

        .result-placeholder p {
          font-size: 16px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .bmi-calculator {
            padding: 60px 0;
          }

          .bmi-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .bmi-form, .bmi-result {
            padding: 30px 20px;
          }

          .bmi-number {
            font-size: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default BMICalculator;
