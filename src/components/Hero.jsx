
import React from 'react';
import './Hero.css';
import bgImg from '../assets/2.png';
import { FaSun, FaMoon } from 'react-icons/fa';


const Hero = ({ darkMode, toggleTheme }) => {
  const handleClick = () => {
    const btn = document.querySelector('.hero-theme-toggle');
    if (btn) {
      btn.classList.add('spin');
      setTimeout(() => btn.classList.remove('spin'), 300);
    }
    toggleTheme();
  };

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            Im a Web and App Developer
          </h1>
        </div>
      </div>

    
      <button
        onClick={handleClick}
        className="hero-theme-toggle"
        aria-label="Toggle light/dark mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}

      </button>
      
    </section>
  );
};

export default Hero;
