import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ cartItems, cartTotal, onCartOpen, onSearch, searchQuery, onOffersClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-xxl px-4 position-relative">

        {/* Logo */}
        <a className="navbar-brand text-success fw-bold" href="#">
          <i className="fas fa-shopping-bag me-2"></i>PickBazar
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link grocery-btn" href="#">
                <i className="fas fa-shopping-cart me-1"></i>Grocery
              </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Shops</a></li>
            <li className="nav-item"><a className="nav-link" href="#" onClick={onOffersClick}>Offers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                Pages
              </a>
              {/* Dropdown menu could go here */}
            </li>
          </ul>

          {/* Right-Aligned Action Buttons */}
          <div className="custom-button-group">
            <button className="custom-btn outline">Join</button>
            <button className="custom-btn filled">Become a Seller</button>
          </div>
        </div>

        {/* Add Mobile Cart Summary */}
        <div className="d-lg-none">
          <button 
            className="btn btn-outline-success position-relative"
            onClick={onCartOpen}
          >
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
