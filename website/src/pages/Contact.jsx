import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="contact-intro">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <h3>Email</h3>
                <p>shauanchi0315@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-text">
                <h3>Location</h3>
                <p>State College, PA</p>
              </div>
            </div>
            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <div className="info-text">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/anchi-shau-506466326/" target="_blank" rel="noopener noreferrer">
                  @anchi-shau
                </a>
              </div>
            </div>
            <div className="info-item">
              <FaGithub className="info-icon" />
              <div className="info-text">
                <h3>GitHub</h3>
                <a href="https://github.com/shauangel" target="_blank" rel="noopener noreferrer">
                  @shauangel
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 