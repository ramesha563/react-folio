// Resume.jsx
import React from 'react';
import { FaDownload, FaReact, FaHtml5, FaCss3Alt, FaJs, FaMicrosoft, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiCanva, SiBootstrap, SiTailwindcss, SiFigma } from 'react-icons/si';
import './Resume.css';

const floatingIcons = [
  { icon: <FaReact />, color: '#61dafb' },
  { icon: <FaHtml5 />, color: '#e34c26' },
  { icon: <FaCss3Alt />, color: '#264de4' },
  { icon: <FaJs />, color: '#f0db4f' },
  { icon: <FaMicrosoft />, color: '#00a1f1' },
  { icon: <SiFirebase />, color: '#ffca28' },
  { icon: <SiTailwindcss />, color: '#38bdf8' },
  { icon: <SiMongodb />, color: '#4db33d' },
  { icon: <SiBootstrap />, color: '#7952b3' },
  { icon: <FaGitAlt />, color: '#f1502f' },
  { icon: <FaGithub />, color: '#333' },
  { icon: <SiCanva />, color: '#00c4cc' },
  { icon: <SiFigma />, color: '#a259ff' },
];

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      
      <div className="resume-icons-bg">
        {floatingIcons.map((item, i) => {
          const directions = ['fromTop', 'fromLeft', 'fromRight', 'fromBottom'];
          const randomDir = directions[Math.floor(Math.random() * directions.length)];

          return (
            <div
              key={i}
              className={`resume-icon ${randomDir}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`,
                animationDuration: `10s`,
                fontSize: `${25 + Math.random() * 20}px`,
                color: item.color,
                opacity: 0.95,
                filter: 'drop-shadow(0 0 5px rgba(154, 8, 8, 0.53))',
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </div>

      <div className="resume-container">
        <h2 className="resume-title">Ramesha's Resume</h2>
        <p className="resume-text">Here you can view or download my resume to learn more about my qualifications, skills, and experiences:</p>
        <a href="/Ramesha CV Resume (1).pdf" download className="resume-button">
          <FaDownload className="download-icon" /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
