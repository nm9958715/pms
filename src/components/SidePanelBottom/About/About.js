// About.js
import React from 'react';
import './About.css';

const About = ({ onClose }) => {
    const handleClose = () => {
        onClose(); // Call the onClose function passed from Dashboard
      };
  return (
    <div className="popup">
      <div className="popup-content">
        <h1 className="about-heading">About</h1>
        <p><b><h3>Project Management Solution</h3></b></p>
        <button onClick={handleClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default About;
