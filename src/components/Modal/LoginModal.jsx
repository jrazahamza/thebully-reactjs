import React from "react";
// import "./LoginModal.css";

function LoginModal({ closeModal }) {

    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") {
          closeModal();
        }
      };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
