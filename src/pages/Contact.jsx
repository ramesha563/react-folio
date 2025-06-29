
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>📞 Let's Get in Touch</h2>
      <p className="contact-text">Feel free to reach out through any of the platforms below:</p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/ramesha-waseem-ul-haq-65b1a6256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:ramesha2203e@gmail.com">
          <FaEnvelope className="icon" />
          <span>Gmail</span>
        </a>

        <a href="https://github.com/ramesha56" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>

        <a href="https://www.instagram.com/with_me_coding/?next=%2F" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a> 


        {/* <div class="contact-item">
         <i class="fab fa-instagram"></i>Instagam: <a href="https://www.instagram.com/with_me_coding/?next=%2F">with_me_coding</a>
        
      </div> */}

        {/* <a href="tel:+911234567890">
          <FaWhatsapp className="icon" />
          <span>+92 3442206384</span>
        </a> */}
      </div>
    </section>
  );
};

export default Contact;
