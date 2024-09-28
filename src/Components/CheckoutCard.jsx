import React from 'react';
import "../ComponentCss/CheckoutCard.css"

// const Card = () => {
//   return (
//     <div className="card-container">
//       <div className="card-header">
//         <h3>OD 18N 6616</h3>
//         <div className="card-icon">
//           <span>&#x21B7;</span> 
//         </div>
//       </div>
//       <div className="card-content">
//         <div className="car-info">
//           <span>Black</span>
//           <span className="dot"></span>
//           <span><strong>06</strong>, A2</span>
//           <span>ground floor</span>
//         </div>
//         <div className="payment-info">
//           <span>Payment: <span className="payment-status">Successful</span></span>
//           <span>Via Online</span>
//         </div>
//       </div>
//       <div className="card-footer">
//         <span>Checked out 25 min ago</span>
//       </div>
//     </div>
//   );
// };

// export default Card;


const CarCard = () => {
  return (
    <div className="car-card">
      <div className="car-header">
        <h3>OD 18N 6616</h3>
        <div className="upload-icon">
          <i className="arrow-icon">↗️</i>
        </div>
      </div>
      <hr className="divider" />
      <div className="car-info">
        <span>Black</span>
        <span className="dot"></span>
        <span><strong>06</strong>, A2</span>
        <span>ground floor</span>
      </div>
      <div className="payment-info">
        <span>Payment: <span className="payment-status">Successful</span></span>
        <span>Via Online</span>
      </div>
      <div className="checkout-info">
        <span>Checked out 25 min ago</span>
      </div>
    </div>
  );
}

export default CarCard;
