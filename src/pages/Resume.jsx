
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Ramesha's Resume</h2>
        <p className="resume-text">Here you can view or download my resume to learn more about my qualifications, skills, and experiences.:</p>
        <a href="/Ramesha Resume CV.pdf" download className="resume-button">
          <FaDownload className="download-icon" /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
