import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiCanva, SiFlutter, SiBootstrap } from 'react-icons/si';

const skills = [
  { name: 'MS Office', icon: <FaMicrosoft />, color: '#00a1f1', desc: 'Efficient in Word, Excel, PowerPoint for documentation and analysis.' },
  { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26', desc: 'Strong in structuring web pages using semantic HTML5.' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4', desc: 'Skilled in styling responsive layouts with modern CSS3.' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952b3', desc: 'Using Bootstrap for rapid and responsive design.' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f', desc: 'Core knowledge of JavaScript for dynamic web apps.' },
  { name: 'React', icon: <FaReact />, color: '#61dafb', desc: 'Building modern UIs with components and hooks.' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8', desc: 'Using utility-first CSS framework for fast UI design.' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', desc: 'Backend integration with auth, Firestore, and hosting.' },
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569B', desc: 'Developing mobile apps with Dart and Flutter widgets.' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d', desc: 'Managing NoSQL databases for flexible schemas.' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f1502f', desc: 'Version control and collaboration using Git CLI.' },
  { name: 'GitHub', icon: <FaGithub />, color: '#333', desc: 'Hosting and managing code in repositories.' },
  { name: 'Canva', icon: <SiCanva />, color: '#00c4cc', desc: 'Designing graphics, logos, and posters easily.' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ borderColor: skill.color }}>
                <div className="icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
              <div className="flip-card-back" style={{ backgroundColor: skill.color }}>
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
