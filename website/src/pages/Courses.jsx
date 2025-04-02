import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import coursesData from '../data/courses.json';
import '../assets/styles/courses.css';
import pennstateIcon from '../assets/images/pennstate-icon.jpg';
import ntouIcon from '../assets/images/ntou-icon.png';

const Courses = () => {
  const getSchoolIcon = (school) => {
    switch (school) {
      case 'NTOU':
        return <img src={ntouIcon} alt="NTOU" className="school-icon" />;
      case 'PennState':
        return <img src={pennstateIcon} alt="Penn State" className="school-icon" />;
      default:
        return <FaUniversity className="school-icon" />;
    }
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <p className="courses-intro">
        Courses I've taken as part of my CS degrees.
      </p>
      <div className="courses-grid">
        {coursesData.courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <h2 className="course-code">{course.code}</h2>
              <div className="course-school">
                {getSchoolIcon(course.school)}
                <span>{course.school}</span>
              </div>
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            {course.languages.length > 0 && (
              <div className="language-tags">
                {course.languages.map((language, langIndex) => (
                  <span key={langIndex} className="language-tag">
                    {language}
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