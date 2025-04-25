import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Flux</span>
          <span className="logo-highlight">IA</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-links" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planos" className="nav-links" onClick={() => setIsOpen(false)}>
              Planos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-links" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
