import React from 'react';
import '../Styles/Fonts.css';

function Header() {
  return (
    <div className = "container">      
      <img src='logo.png' alt="Logo" className = 'logo' />      
      <div className = "headtitle">Medical Office Management Systems</div>
    </div>
  );
}

export default Header;
