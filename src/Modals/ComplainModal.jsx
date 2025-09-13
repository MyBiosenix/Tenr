import React from 'react';
import '../styles/reviewModal.css'; // reuse same styling

function ComplainModal() {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Thank You!</h2>
        <p>Your Complain has been successfully recorded and will be Resolved Soon</p>
      </div>
    </div>
  );
}

export default ComplainModal;
