  import React from 'react';
  import { HiCheckCircle } from 'react-icons/hi';

  function ProjectProp({ proj, discount, title, description, price, access, className, onAccessClick }) {
    return (
      <div className={`project ${className || ''}`}>
        <p className='progress'>{proj}</p>
        <div className='ribbon'>
          {discount && <span>{discount}</span>}
        </div>

        <h3>{title}</h3>
        <h4>{price}</h4>
        <button onClick={() => onAccessClick(title)}>{access}</button>

        <div className='desc'>
          {description.map((line, index) => (
            <p key={index} className="desc-line">
              <HiCheckCircle className="check-icon" />
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  }

  export default ProjectProp;
