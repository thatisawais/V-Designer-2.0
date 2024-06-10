import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignupClick = () => {
    // Navigate to the Signup page
    navigate('/signup');
  };

  const handleLoginClick = () => {
    // Navigate to the Signup page
    navigate('/login');
  };

  const handleHomeClick = () => {
    // Navigate to the Signup page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h2>V-Designers</h2>
      <div className="navbar-buttons">
      <button className="navbar-button" onClick={handleHomeClick}>Home</button>
        <button className="navbar-button" onClick={handleLoginClick}>Login</button>
        <button className="navbar-button" onClick={handleSignupClick}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
