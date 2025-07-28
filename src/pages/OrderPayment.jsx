import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderPayment.css'; // optional for custom styles

const OrderPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const cartTotal = location.state?.cartTotal || 0;
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    // Name: only letters and spaces, at least 2 chars
    if (!/^[A-Za-z ]{2,}$/.test(name)) {
      newErrors.name = 'Name should contain only letters and spaces.';
    }
    // Phone: exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    // Address: required
    if (!address.trim()) {
      newErrors.address = 'Address is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setOrderPlaced(true);
    // Optionally, clear cart or trigger further actions here
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold text-success">🛒 Order & Payment</h2>
      {orderPlaced ? (
        <div className="order-success-container text-center py-5">
          <div className="order-success-animation mb-4">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="#e6f9ed" stroke="#28a745" strokeWidth="4" />
              <polyline points="25,43 37,55 57,33" fill="none" stroke="#28a745" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="0.7s" fill="freeze" />
              </polyline>
            </svg>
          </div>
          <h3 className="fw-bold text-success mb-3 animate__animated animate__fadeInDown">Order Successful!</h3>
          <p className="lead animate__animated animate__fadeInUp">Thank you for your purchase. Your order has been placed and is being processed.</p>
          <button className="btn btn-success mt-4 px-4 py-2 animate__animated animate__fadeInUp" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      ) : (
        cartItems.length === 0 ? (
          <div className="alert alert-warning text-center fs-5">
            No items in your order.
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              {/* Order Summary */}
              <div className="card mb-4 shadow-sm border-0">
                <div className="card-header bg-success text-white fw-semibold">
                  Order Summary
                </div>
                <ul className="list-group list-group-flush">
                  {cartItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="list-group-item d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded me-3"
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: 'cover',
                            borderRadius: 8,
                          }}
                        />
                        <div>
                          <div className="fw-bold">{item.name}</div>
                          <div className="text-muted small">{item.weight}</div>
                          <div className="small">Qty: {item.quantity}</div>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-semibold">₹{item.price.toFixed(2)}</div>
                        <div className="text-muted small">
                          Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="card-footer d-flex justify-content-between">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold fs-5 text-success">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Shipping Form */}
              <form className="card p-4 shadow-sm border-0" onSubmit={handlePlaceOrder} noValidate>
                <h5 className="mb-3 fw-semibold text-success">Shipping Details</h5>
                <div className="mb-3">
                  <label className="form-label fw-medium">Full Name</label>
                  <input
                    type="text"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    placeholder="Enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Address</label>
                  <input
                    type="text"
                    className={`form-control${errors.address ? ' is-invalid' : ''}`}
                    placeholder="Enter your address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Phone</label>
                  <input
                    type="tel"
                    className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                    required
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <button type="submit" className="btn btn-success w-100 fw-semibold">
                  ✅ Place Order
                </button>
              </form>

              {/* Back Button */}
              <button
                className="btn btn-link w-100 mt-3 text-decoration-none text-secondary"
                onClick={() => navigate(-1)}
              >
                &larr; Back to Cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default OrderPayment;
