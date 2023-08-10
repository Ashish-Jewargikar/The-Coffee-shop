import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId); // Get the section element
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Coffee Shop Logo" className="logo-img" />
        <span className="logo-name">Coffee Delights</span>
      </div>
      <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
        <li className="nav-item" onClick={() => scrollToSection('about')}>About</li>
        <li className="nav-item" onClick={() => scrollToSection('services')}>Services</li>
        <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>
    </header>
  );
};

export default Header;
