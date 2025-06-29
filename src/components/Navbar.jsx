

import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaLightbulb, FaLaptopCode, FaFileAlt, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logo-unscreen.gif'; 
import { FaPhoneFlip } from 'react-icons/fa6';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''} ${isMobile ? 'mobile' : ''}`}>
      {isMobile ? (
        <ul>
          <li><a href="#home"><FaHome /></a></li>
          <li><a href="#about"><FaUser /></a></li>
          <li><a href="#skills"><FaLightbulb /></a></li>
          <li><a href="#projects"><FaLaptopCode /></a></li>
          <li><a href="#resume"><FaFileAlt /></a></li>
          <li><a href="#contact"><FaPhone /></a></li>
        </ul>
      ) : (
        <>
          <ul className="navbar-left">
            <li><a href="#home"><FaHome className="nav-icon" style={{ marginRight: '5px' }} /> Home</a></li>
            <li><a href="#about"><FaUser className="nav-icon" style={{ marginRight: '5px' }} /> About</a></li>
            <li><a href="#skills"><FaLightbulb className="nav-icon" style={{ marginRight: '5px' }} /> Skills</a></li>
          </ul>

          <div className="navbar-logo">
            <a href="#home">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <ul className="navbar-right">
            <li><a href="#projects"><FaLaptopCode className="nav-icon" style={{ marginRight: '5px' }} /> Projects</a></li>
            <li><a href="#resume"><FaFileAlt className="nav-icon" style={{ marginRight: '5px' }} /> Resume</a></li>
            <li><a href="#contact"><FaPhoneSlash className="nav-icon" style={{ marginRight: '5px' }} /> Contact</a></li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
