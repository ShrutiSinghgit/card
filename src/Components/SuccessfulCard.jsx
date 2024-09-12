import React from 'react'

const SuccessfulCard = () => {
  return (
    <div className="booking-card">
    <div className="card-header">
      <span className="booking-id">OD 18N 6616</span>
      <span className="check-icon">✔️</span> 
    </div>


    <div className="card-body">
      <div className="card-detail">
        <span className="car-color">
        Black  <span className="color-dot black"></span>
        </span>
        <span id="hash-design">|</span>
        <span className="seat-detail">
          <strong>06</strong>, A2 <span className="floor-info">ground floor</span>
        </span>
      </div>


      <div className="booking-info">
        Booked: <strong>Via Online</strong>
      </div>
    </div>
    <div className="card-footer">
      <span>Booked 25 min ago</span>
    </div>
  </div>

  )
}

export default SuccessfulCard