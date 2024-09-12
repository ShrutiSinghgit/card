// import React from 'react'

//     const UnsuccessfullCard = () => {
//       return (
//         <div className="card">
//         <div className="card-header">
//           <span className="card-id">OD 18N 6616</span>
//           <button className="close-button">✕</button>
//         </div>
//         <div className="card-content">
//           <span className="color-info">Black ●</span>
//           <span className="location-info">06, A2 ground floor</span>
//         </div>
//         <div className="error-message">Error Occured</div>
//       </div>
    
//   )
// }

// export default UnsuccessfullCard
import React from 'react';

const UnsuccessfulCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">OD 18N 6616</div>
        <div className="card-icon">
          <span className="material-icons">schedule</span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <div className="card-status">Black</div>
          <div className="card-location">06. A2 ground floor</div>
        </div>
        <div className="card-time">
          Expected arrival: 11:57 pm
        </div>
        <div className="card-footer">
          Booked 25 mins ago
        </div>
      </div>
    </div>
  );
};

export default UnsuccessfulCard;