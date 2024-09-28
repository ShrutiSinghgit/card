import React, { useState } from 'react';
import "../ComponentCss/checking.css"

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="app-container">
      <div className="card" onClick={handleCardClick}>
        <div className="card-content">
          <p><strong>OD 18N 6616</strong></p>
          <p>Black</p>
          <p>06, A2 ground floor</p>
          <p>Booked: Via Online</p>
          <small>Booked 5 mins ago</small>
        </div>
        <div className="check-icon">
          <span>✔</span>
        </div>
      </div>

      {showDetails && (
        <div className="detail-card">
          <div className="close-icon" onClick={handleCardClick}>
            <span>✖</span>
          </div>
          <div className="details">
            <h3>Customer details:</h3>
            <p><strong>Name:</strong> Sreelakshmi Suresh</p>
            <p><strong>Contact:</strong> 1234567890</p>
            <p><strong>ID:</strong> XXXXXXXXXX</p>
            <h3>Vehicle details:</h3>
            <p><strong>Vehicle number:</strong> WB 18N 6616</p>
            <p><strong>Colour:</strong> Black</p>
            <p><strong>Size:</strong> Small</p>
            <h3>Operator details:</h3>
            <p><strong>Operator allotted:</strong> Ridha Sai Sree</p>
            <p><strong>Slot no:</strong> 06, A2</p>
          </div>
          <div className="timeline">
            <p><strong>Booked:</strong> 01:59 PM</p>
            <p><strong>Arriving:</strong> 02:30 PM</p>
            <p><strong>Check-in:</strong> --</p>
            <p><strong>Check-out:</strong> --</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

