import React, { useState } from 'react';
import Link from 'next/link'; 
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-active' : ''}`}>
      <div className="header-container">
        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="https://github.com/Mariussgal/TSE-Project" className="nav-link">Github</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;