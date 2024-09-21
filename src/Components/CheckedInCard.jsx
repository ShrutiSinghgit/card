// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../ComponentCss/CheckedInCard.css"

const CheckedInCard = () => {
  return (
    <div className={`booking-card-2`}>
      <div className={`card-header-2`}>
        <span className={`booking-id-2`}>OD 18N 6616</span>
        <span className={`check-icon-2`}>⤵️</span> 
      </div>

      <div className={`card-body-2`}>
        <div className={`card-detail-2`}>
          <span className={`car-color-2`}>
            Black  <span className={`color-dot-2 black`}></span>
          </span>
          <span id={`hash-design-2`}>|</span>
          <span className={`seat-detail-2`}>
            <strong>06</strong>, A2 <span className={`floor-info-2`}>ground floor</span>
          </span>
        </div>

        
      </div>
      <div className={`card-footer-2`}>
        <span>Checked in 25 min ago</span>
      </div>
    </div>
  )
}

export default CheckedInCard