import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, cartTotal, isOpen, onToggle, onIncreaseQty, onDecreaseQty }) => {
  const navigate = useNavigate();
  
  // Format cart summary for display
  const itemCount = cartItems.length;
  const formattedTotal = cartTotal.toFixed(2);

  return (
    <>
      {/* Cart Summary Button */}
      <div className="cart-summary-btn">
        <button 
          className="btn btn-success d-flex flex-column align-items-center p-3"
          onClick={onToggle}
          style={{ borderRadius: '8px', minWidth: '120px' }}
        >
          <div>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</div>
          <div>${formattedTotal}</div>
          <div className="cart-icon mt-1">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </button>
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <>
          {/* Existing backdrop and modal structure */}
          <div className="cart-drawer-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Shopping Cart ({itemCount} {itemCount === 1 ? 'Item' : 'Items'})
                  </h5>
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