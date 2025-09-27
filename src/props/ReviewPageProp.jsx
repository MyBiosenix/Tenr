import React from 'react'
import '../Styles/reviewcomp.css'

function ReviewPageProp({ icon, name, rate, review, time, reply }) {
  return (
    <div className='myprop'>
      <div className='in-myprop'>
        <img src={icon} alt="platform-icon" className="usericon" />
        <div className='namereview'>
          <h3>{name}</h3>
          <div className='rateicon'>{Array(5).fill().map((_, i) => <span key={i}>{rate}</span>)}</div>
          {time && <small className="review-time">{time}</small>}
        </div>
      </div>
      <p>{review}</p>

      {reply && (
        <div className="company-reply">
          <p><strong>Tenr Global Solution:</strong> {reply}</p>
        </div>
      )}
    </div>
  )
}

export default ReviewPageProp
