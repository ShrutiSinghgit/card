// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../ComponentCss/CheckedOutCard.css"

const CheckedOutCard = () => {
  return (
    <div className={`booking-card-3`}>
      <div className={`card-header-3`}>
        <span className={`booking-id-3`}>OD 18N 6616</span>
        <span className={`check-icon-3`}>⤴️</span> 
      </div>

      <div className={`card-body-3`}>
        <div className={`card-detail-3`}>
          <span className={`car-color-3`}>
            Black  <span className={`color-dot-3 black`}></span>
          </span>
          <span id={`hash-design-3`}>|</span>
          <span className={`seat-detail-3`}>
            <strong>06</strong>, A2 <span className={`floor-info-3`}>ground floor</span>
          </span>
        </div>

        <div className={`booking-info-3`}>
          Payment: <strong className={`sucessfull-3`}>Sucessfull</strong>
          <span id={`hash-design-3`}>|</span>
          <span className={`payment-type-3`}>Via Online</span>
        </div>
      </div>
      <div className={`card-footer-3`}>
        <span>Checked out 25 min ago</span>
      </div>
    </div>
  )
}

export default CheckedOutCard