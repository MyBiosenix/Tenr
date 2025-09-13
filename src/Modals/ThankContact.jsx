import React from 'react';
import '../styles/reviewModal.css'; // reuse same styling

function ThankContact() {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Thank You!</h2>
        <p>Your Message has been successfully recorded</p>
      </div>
    </div>
  );
}

export default ThankContact;
