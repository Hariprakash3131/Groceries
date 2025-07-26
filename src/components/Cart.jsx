import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, cartTotal, isOpen, onToggle, onIncreaseQty, onDecreaseQty }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile Cart Button */}
      <div className="mobile-cart-btn d-lg-none">
        <button 
          className="btn btn-success rounded-circle p-3 position-relative"
          onClick={onToggle}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        </button>
      </div>
      {/* Cart Modal (now for all devices) */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="modal-backdrop fade show"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1040 }}
            onClick={onToggle}
          />
          <div className="cart-drawer-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header d-flex align-items-center justify-content-between">
                  <h5 className="modal-title">Shopping Cart</h5>
                  <button
                    type="button"
                    className="btn-close ms-2"
                    aria-label="Close"
                    onClick={onToggle}
                    style={{ fontSize: '1.5rem', background: 'none', border: 'none', boxShadow: 'none', color: '#2c3e50', opacity: 0.7 }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-muted">Your cart is empty</p>
                  ) : (
                    <div>
                      {cartItems.map((item, index) => (
                        <div key={index} className="cart-item-row">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="cart-item-img"
                          />
                          <div className="cart-item-details">
                            <h6 className="mb-0">{item.name}</h6>
                            <small className="text-muted">{item.weight}</small>
                            <div className="cart-item-qty">
                              <button
                                className="btn btn-outline-secondary btn-sm px-2 py-0 me-2"
                                onClick={() => onDecreaseQty(item.id)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                className="btn btn-outline-secondary btn-sm px-2 py-0 ms-2"
                                onClick={() => onIncreaseQty(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-item-price">
                            <div className="fw-bold">${item.price.toFixed(2)}</div>
                          </div>
                        </div>
                      ))}
                      <div className="cart-total">
                        <div className="d-flex justify-content-between fw-bold">
                          <span>Total:</span>
                          <span>${cartTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary me-2" 
                    onClick={onToggle}
                  >
                    Continue Shopping
                  </button>
                  {cartItems.length > 0 && (
                    <button type="button" className="btn btn-success" onClick={() => { onToggle(); navigate('/order-payment', { state: { cartItems, cartTotal } }); }}>
                      Checkout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart; 