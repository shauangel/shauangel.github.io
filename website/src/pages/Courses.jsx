import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiCplusplus, SiJulia } from 'react-icons/si';
import coursesData from '../data/courses.json';
import '../assets/styles/courses.css';

const Courses = () => {
  const getLanguageIcon = (language) => {
    switch (language) {
      case 'Python':
        return <FaPython className="language-icon python" />;
      case 'C++':
        return <SiCplusplus className="language-icon cpp" />;
      case 'Julia':
        return <SiJulia className="language-icon julia" />;
      case 'MATLAB':
        return <span className="language-text matlab">MATLAB</span>;
      default:
        return null;
    }
  };

  return (
    <div className="courses-container">
      <h1>Coursework</h1>
      <p className="courses-intro">
        Courses I've taken at National Taiwan Ocean University and The Pennsylvania State University as part of my CS degree so far.
      </p>
      <div className="courses-grid">
        {coursesData.courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2 className="course-code">{course.code}</h2>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            {course.languages.length > 0 && (
              <div className="language-tags">
                {course.languages.map((language, langIndex) => (
                  <span key={langIndex} className="language-tag">
                    {getLanguageIcon(language)}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 