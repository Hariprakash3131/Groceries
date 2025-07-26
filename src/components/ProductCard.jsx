import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card position-relative">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">{product.discount}% OFF</div>
      )}

      {/* Product Image */}
      <div className="image-wrapper">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.name}
        />
      </div>

      {/* Product Details */}
      <div className="card-body d-flex flex-column">
        <h6 className="card-title fw-bold mb-1">{product.name}</h6>
        <p className="text-muted small mb-2">{product.weight}</p>

        {/* Price Section */}
        <div className="mb-3">
          <span className="fw-bold text-success fs-5">
            ₹{product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              ₹{product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className="btn btn-success mt-auto w-100"
          onClick={() => onAddToCart(product)}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
