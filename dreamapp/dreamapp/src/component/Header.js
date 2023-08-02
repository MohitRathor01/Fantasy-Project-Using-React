import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light custom-nav" data-aos="fade-down">
        <div className="container-fluid mx-4">
          <Link to="/">
            <img src="Images/halaplay_logo.png" style={{ height: '50px' }} alt="" />
          </Link>
          <button
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 custom-ul">
              <li className="nav-item ">
                <Link to="/Play" className="nav-link py-4 custom-active" aria-current="page">
                  Play
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link py-4 custom-active" aria-current="page">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link py-4 custom-active" aria-current="page">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
