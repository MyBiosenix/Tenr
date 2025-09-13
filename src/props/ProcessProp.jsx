import React from 'react'
import '../styles/process.css'

function ProcessProp({ icon,title }) {
  return (
    <div className='myprocess'>
        <div className='myicon'>{icon}</div>
        <h4>{title}</h4>
    </div>
  )
}

export default ProcessProp
