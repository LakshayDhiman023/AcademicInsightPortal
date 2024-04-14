import React from 'react';
import logo from '../../images/logo.png'

const Navbar = ({ onTabClick, activeTab }) => {
  const handleTabClick = (tab) => {
    onTabClick(tab);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Institute Logo" />
      </div>
      <div className="navbar-tabs">
        <div className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          Home
          {activeTab === 'home' && <div className="active-line"></div>}
        </div>
        <div className={`tab ${activeTab === 'attendance' ? 'active' : ''}`} onClick={() => handleTabClick('attendance')}>
          Attendance
          {activeTab === 'attendance' && <div className="active-line"></div>}
        </div>
        <div className={`tab ${activeTab === 'result' ? 'active' : ''}`} onClick={() => handleTabClick('result')}>
          Result
          {activeTab === 'result' && <div className="active-line"></div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
