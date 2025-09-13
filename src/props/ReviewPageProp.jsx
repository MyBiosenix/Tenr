import React from 'react'
import '../styles/reviewcomp.css'

function ReviewPageProp({ icon, name, rate, review }) {
  return (
    <div className='myprop'>
        <div className='in-myprop'>
            <img src={icon} alt="platform-icon" className="usericon" />
            <div className='namereview'>
                <h3>{name}</h3>
                <div className='rateicon'>{Array(5).fill().map((_, i) => <span key={i}>{rate}</span>)}</div>
            </div>
        </div>
        <p>{review}</p>
    </div>
  )
}

export default ReviewPageProp
