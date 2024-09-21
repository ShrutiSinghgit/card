/*import React from 'react'
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
        <span className="location-info">06, A2 ground floor</span>
      </div>
      <div className="error-message">Error Occured</div>
    </div>
  );
};

export default ErrorOccuredCard;
*/

// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../ComponentCss/ErrorOccuredCard.css"

const ErrorOccuredCard = () => {
  return (
    <div className={`error-card-5`}>
      <div className={`error-header-5`}>
        <span className={`error-id-5`}>OD 18N 6616</span>
        <span className={`error-icon-5`}>❌</span> 
      </div>

      <div className={`error-body-5`}>
        <div className={`error-detail-5`}>
          <span className={`error-color-dot-5`}>
            Black  <span className={`color-dot-5 black`}></span>
          </span>
          <span id={`error-design-5`}>|</span>
          <span className={`error-detail-5`}>
          <strong>06</strong>, A2 <span className={`floor-info-1`}>ground floor</span>
          </span>
        </div>

        <div className={`error-message-5`}>
          <strong>Error Occured</strong>
        </div>
      </div>
      
    </div>
  )
}

export default ErrorOccuredCard