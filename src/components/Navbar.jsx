import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ cartItems, cartTotal, onCartOpen }) => {
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
            <li className="nav-item"><a className="nav-link" href="#">Offers</a></li>
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

        {/* Cart Summary (Only on Desktop) */}
        <div className="cart-summary d-none d-lg-flex flex-column align-items-center">
          <div className="fw-bold">{cartItems.length} Item{cartItems.length !== 1 && 's'}</div>
          <div className="fw-bold">${cartTotal.toFixed(2)}</div>
          <button className="btn-view-cart" onClick={onCartOpen}>
            <i className="fas fa-shopping-cart me-1"></i>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
