import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import mainPic from '/react_projekt/src/img/main_pic.webp'
import logo from '/react_projekt/src/img/PusztaiKicks-removebg-preview.png'

import './navbar.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

function Navbarr() {

  const height = "18px"; 
  const width = "170px";


  return (
    
    <nav className="navbar">
    <div className="container d-flex align-items-center justify-content-between">
      {/* Menu Button */}
      <div className="nav-item">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start customoffcanvas"
        data-bs-scroll="true"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li><a href="index.html">Főoldal</a></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sneakers
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="jordan.html">Jordan</a></li>
                <li><a className="dropdown-item" href="dunk.html">Dunk</a></li>
                <li><a className="dropdown-item" href="nikeTn.html">Nike Tn</a></li>
              </ul>
            </li>
            <li><a href="ruhak.html">Ruhák</a></li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      

      <a className="navbar-brand" to="/index.html">
        <img src={logo} alt="oldal-logo" style={{height : height, width : width}}  />
        </a>


      {/* Search Button */}
      <div className="nav-item">
        <button
          className="btn btn-secondary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="material-symbols-outlined">search</span>
        </button>

        <div className="offcanvas offcanvas-end" id="offcanvasRight">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <input
              className="form-control border-0"
              id="myInput"
              type="text"
              placeholder="kereses..."
            />
            <hr />
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <div className="nav-item">
        <button
          className="btn btn-third"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRightCart"
          aria-controls="offcanvasRightCart"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>

        <div className="offcanvas offcanvas-end" id="offcanvasRightCart">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body3">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="number">0</div>
            <div className="kosar">A kosarad üres</div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  );
}

export default Navbarr;
