import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import './header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header`}>
      <div className="header-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
    
          <div className="nav-buttons">

              <>
                <button 
                  className="nav-button login-button">
                    <Link href="/" className="nav-button">
                  MENU
                  </Link>
                </button>
              </>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;