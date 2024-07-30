import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
        <img src="title.png" alt="profile" />
        <div className="icons">
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Header;
