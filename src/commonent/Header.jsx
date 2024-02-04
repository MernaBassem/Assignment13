import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import styles from '../assets/css/header.module.css'; 

const Header = () => {
  const location = useLocation();
  return (
    <>    
    <div >
     <nav className={`navbar navbar-expand-lg g fixed-top `}>
      <div className="container">
      <Link className={`navbar-brand ${styles.title} `} to="/">START FRAMEWORK</Link>

        <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
        
            <li className={`nav-item mx-2 ${location.pathname==='/about' ? styles.activeClass : ''}`}>
              <Link className={`nav-link`} aria-current="page" to="/about">ABOUT</Link>
            </li>
            <li className={`nav-item  mx-2 ${location.pathname==='/portofolio' ?styles.activeClass : '' }`}>
              <Link className={`nav-link`} to="/portofolio">PORTFOLIO</Link>
            </li>
            <li className={`nav-item  mx-2 ${location.pathname==='/contact' ? styles.activeClass : ''}`}>
              <Link className={`nav-link`}  to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>


</>
  );
};

export default Header;
