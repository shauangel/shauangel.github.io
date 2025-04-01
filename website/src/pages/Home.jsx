import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import monkeyDev from '../assets/images/monkey-dev.jpeg';
import '../assets/styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row className="hero-section align-items-center">
          <Col md={6} className="hero-content">
            <div className="subtitle">THINK UNLIMITED</div>
            <h1 className="hero-title">
              Intelligence Monkey Smashes
              <span className="highlight"> Bug-Bananas</span>
            </h1>
            <p className="hero-text">
            Hi, I'm Anchi :) Full-stack whiz, ML/DL enthusiast, and passionate builder
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="primary-button">View Projects</Link>
              <Link to="/contact" className="secondary-button">Get in Touch</Link>
            </div>
          </Col>
          <Col md={6} className="hero-illustration">
            <div className="illustration-container">
              <img 
                src={monkeyDev}
                alt="Monkey Developer Illustration" 
                className="main-illustration"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
