import React from 'react'

function QualityProp({ icon, title, description }) {
  return (
    <div className='q-card'>
      <div className='iconnn'>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default QualityProp
