// eslint-disable-next-line no-unused-vars
/*import React from 'react';
import "../ComponentCss/SuccessfulCard.css"

const SuccessfullCard = () => {
  return (
    <div className={`booking-card-1`}>
      <div className={`card-header-1`}>
        <span className={`booking-id-1`}>OD 18N 6616</span>
        <span className={`check-icon-1`}>✔️</span> 
      </div>

      <div className={`card-body-1`}>
        <div className={`card-detail-1`}>
          <span className={`car-color-1`}>
            Black  <span className={`color-dot-1 black`}></span>
          </span>
          <span id={`hash-design-1`}>|</span>
          <span className={`seat-detail-1`}>
            <strong>06</strong>, A2 <span className={`floor-info-1`}>ground floor</span>
          </span>
        </div>

        <div className={`booking-info-1`}>
          Booked: <strong>Via Online</strong>
        </div>
      </div>
      <div className={`card-footer-1`}>
        <span>Booked 25 min ago</span>
      </div>
    </div>
  )
}

export default SuccessfullCard
*/

//popup evfect


// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "../ComponentCss/SuccessfulCard.css"

const SuccessfullCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // trigger the popup effect when the component mounts
  }, []);

  return (
    <div className={`booking-card-1 ${showPopup ? 'popup-effect show' : 'popup-effect'}`}>
      <div className={`card-header-1`}>
        <span className={`booking-id-1`}>OD 18N 6616</span>
        <span className={`check-icon-1`}>✔️</span> 
      </div>

      <div className={`card-body-1`}>
        <div className={`card-detail-1`}>
          <span className={`car-color-1`}>
            Black  <span className={`color-dot-1 black`}></span>
          </span>
          <span id={`hash-design-1`}>|</span>
          <span className={`seat-detail-1`}>
            <strong>06</strong>, A2 <span className={`floor-info-1`}>ground floor</span>
          </span>
        </div>

        <div className={`booking-info-1`}>
          Booked: <strong>Via Online</strong>
        </div>
      </div>
      <div className={`card-footer-1`}>
        <span>Booked 25 min ago</span>
      </div>
    </div>
  )
}

export default SuccessfullCard