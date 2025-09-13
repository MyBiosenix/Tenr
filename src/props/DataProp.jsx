import React from 'react';

function DataProp({ title, description }) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      {Array.isArray(description) ? (
        <ul className="description-list">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}

export default DataProp;
