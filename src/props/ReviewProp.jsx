import React from 'react';
import '../styles/reviews.css'

function ReviewProp({ icon, content, ratings, image, name }) {
  return (
    <div className='reviews'>
      <img src={icon} alt="platform-icon" className="icon-img" />
      <p>{content}</p>
      <div className='ratingicon'>
        {Array(5).fill().map((_, i) => <span key={i}>{ratings}</span>)}
      </div>
      <img src={image} alt="reviewer" className="review-img" />
      <h3>{name}</h3>
    </div>
  );
}

export default ReviewProp;
