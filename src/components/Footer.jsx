import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">
              <i className="fas fa-shopping-bag me-2"></i>
              PickBazar
            </h5>
            <p className="text-muted">
              Your trusted online grocery store. Fresh products delivered to your doorstep.
            </p>
            <div className="d-flex gap-3 social-icons">
              <a href="#" className="text-muted">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Fruits & Vegetables</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Meat & Fish</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Dairy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Snacks</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="text-muted">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Grocery Street, Food City, FC 12345
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@pickbazar.com
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © HariPrakash
            </p>
          </div>
          <div className="col-md-6 text-md-end payment-icons">
            <div className="d-flex gap-3 justify-content-md-end">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
<img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
<img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 