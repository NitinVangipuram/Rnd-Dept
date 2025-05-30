// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/institute-logo.png'; // Adjust the path and filename as needed
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search functionality here later if needed
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Institute Logo" />
      </div>
      
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;