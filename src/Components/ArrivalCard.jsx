// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../ComponentCss/ArrivalCard.css"

const ArrivalCard = () => {
  return (
    <div className={`booking-card-4`}>
      <div className={`card-header-4`}>
        <span className={`booking-id-4`}>OD 18N 6616</span>
        <span className={`check-icon-4`}>🕘</span> 
      </div>

      <div className={`card-body-4`}>
        <div className={`card-detail-4`}>
          <span className={`car-color-4`}>
            Black  <span className={`color-dot-4 black`}></span>
          </span>
          <span id={`hash-design-4`}>|</span>
          <span className={`seat-detail-4`}>
            <strong>06</strong>, A2 <span className={`floor-info-4`}>ground floor</span>
          </span>
        </div>

        <div className={`booking-info-4`}>
          Expected arrival: <strong>11:57 PM</strong>
        </div>
      </div>
      <div className={`card-footer-4`}>
        <span>Booked 25 min ago</span>
      </div>
    </div>
  )
}

export default ArrivalCard