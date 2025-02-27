import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import '../assets/styles/about.css';

function About() {
  return (
    <Container className="about-container my-5">
      <Row className="align-items-start">
        {/* Left Column - Profile */}
        <Col md={4} className="text-center mb-4 mb-md-0">
          <div className="profile-section">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profile" 
              className="profile-image mb-4"
            />
            <h1 className="name">Anchi Shau</h1>
            <h2 className="title">Software Engineer</h2>
            <div className="affiliations">
              <a href="#" className="affiliation">The Pennsylvania State University</a>
              <a href="#" className="affiliation">Department of Computer Science and Engineering</a>
            </div>

            <div className="social-links mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGoogle />
              </a>
              <a href="https://github.com/shauangel" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </Col>

        {/* Right Column - Content */}
        <Col md={8}>
          <section className="about-section">
            <h2 className="section-title">About Me</h2>
            <p className="intro-text">
              I'm Anchi, a software engineer with a focus on web development and data analysis. 
              Currently pursuing my Master's degree at National Taiwan University, 
              I specialize in developing innovative solutions that bridge technology and user needs.
            </p>
            <p className="intro-text">
              I care about creating efficient, scalable, and user-friendly applications. 
              In my free time, you'll find me exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community.
            </p>
          </section>

          <section className="interests-section mt-5">
            <h2 className="section-title">Interests</h2>
            <ul className="interests-list">
              <li>Software</li>
              <li>Microservices</li>
              <li>Natural Language Processing</li>
              <li>Web Development</li>
              <li>ML/DL</li>
            </ul>
          </section>

          <section className="education-section mt-5">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <div className="degree">
                <span className="degree-icon">🎓</span>
                <h3>Master in Science</h3>
                <p className="institution">The Pennsylvania State University - University Park</p>
                <p className="period">Aug 2024 - present</p>
              </div>
            </div>
            <div className="education-item">
              <div className="degree">
                <span className="degree-icon">🎓</span>
                <h3>Master in Science</h3>
                <p className="institution">National Taiwan Ocean University</p>
                <p className="period">Sep 2022 - Jul 2024</p>
              </div>
            </div>
            <div className="education-item">
              <div className="degree">
                <span className="degree-icon">🎓</span>
                <h3>Bachelor in Science</h3>
                <p className="institution">National Taiwan Ocean University</p>
                <p className="period">Sep 2018 - Jun 2022</p>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default About; 