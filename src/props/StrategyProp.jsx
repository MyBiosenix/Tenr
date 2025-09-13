import React from 'react'
import '../styles/strategy.css'

function StrategyProp({ icon, count, para }) {
  return (
    <div className='strategy'>
      <div className='micon'>{icon}</div>
      <div className='side'>
        <h3>{count}</h3>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default StrategyProp
