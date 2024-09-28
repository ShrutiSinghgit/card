import React from 'react';
import "../ComponentCss/WaitingCArd.css"
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">OD 18N 6616</div>
        <div className="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4"></path>
            <path d="M11 12h2"></path>
          </svg>
        </div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <div className="card-info-item">
            <span className="card-info-label">Black</span>
            <span className="card-info-value">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="black">
                <circle cx="6" cy="6" r="6"></circle>
              </svg>
            </span>
          </div>
          <div className="card-info-item">
            <span className="card-info-label">06, A2</span>
            <span className="card-info-value">ground floor</span>
          </div>
        </div>
        <div className="card-expected">
          <span className="card-expected-label">Expected arrival:<strong>11:57</strong></span>
          {/* <span className="card-expected-value">11:57 pm</span> */}
        </div>
        <div className="card-footer">
          Booked 25 mins ago
        </div>
      </div>
    </div>
  );
};

export default Card;