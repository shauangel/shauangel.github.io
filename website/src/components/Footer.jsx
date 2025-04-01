import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../assets/styles/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="text-center">
        <div className="social-links">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/an-chi-shau-506466326/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/shauangel" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
        
        <div className="contact-info">
          <p className="phone">+1 814-280-1763</p>
          <p className="email">shauanchi0315@gmail.com</p>
        </div>

        <div className="copyright">
          <p>© {currentYear} Monkey Dev. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer; 