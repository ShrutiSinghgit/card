import React from 'react';
import "../ComponentCss/CheckingCard.css"


const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h3>OD 18N 6616</h3>
        <div className="card-icon">
          <span>&#x21BB;</span> {/* This represents the downward arrow icon */}
        </div>
      </div>
      <div className="card-line"></div> {/* Horizontal line */}
      <div className="card-content">
        <div className="car-info">
          <span>Black</span>
          <span className="dot"></span>
          <span>06, A2</span>
          <span>ground floor</span>
        </div>
      </div>
      <div className="card-footer">
        <span>Checked in 25 min ago</span>
      </div>
    </div>
  );
};

export default Card;
