import React from 'react';
import './About.css';
import profileImg from '../assets/about2.jpeg';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-image">
        <img src={profileImg} alt="Ramesha Waeem ul Haq" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <span>Ramesha Waeem ul Haq</span>, an <span>undergraduate</span> student and a passionate Web & App Developer currently studying at <span>Aptech</span> and enrolled in <span>SMIT</span>.
        </p>
        <p>
          I specialize in <span>React, Firebase, JavaScript</span>, and I'm also learning backend development with <span>MongoDB</span>. I enjoy building modern, responsive, and user-friendly websites and apps.
        </p>
      </div>
    </section>
  );
};

export default About;
