import React from 'react'
import "../ComponentCss/ErrorOccuredCard.css"

const ErrorOccuredCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">OD 18N 6616</span>
        <button className="close-button">✕</button>
      </div>
      <div className="card-content">
        <span className="color-info">Black ●</span>
        <span className="location-info"><strong>06</strong>, A2 ground floor</span>
      </div>
      <div className="error-message">Error Occured</div>
    </div>
  );
};

export default ErrorOccuredCard;
