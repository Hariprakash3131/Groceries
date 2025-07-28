import React from "react";
import { categories } from "../api/mockApi";
import "./CategorySidebar.css";

const CategorySidebar = ({ 
  selectedCategory, 
  onCategorySelect, 
  mobileOpen, 
  onClose,
  priceFilter,
  onPriceFilter,
  discountFilter,
  onDiscountFilter
}) => {
  return (
    <div className={`category-sidebar${mobileOpen ? ' mobile-visible' : ''}`}>
      {/* Mobile close button */}
      {mobileOpen && (
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">&times;</button>
      )}
      <h5 className="mb-3 fw-bold">Categories</h5>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item d-flex align-items-center ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            onClick={() => {
              onCategorySelect(category.id);
              if (mobileOpen && onClose) onClose();
            }}
          >
            <span className="me-3" style={{ fontSize: '1.2rem' }}>
              {category.icon}
            </span>
            <span className="flex-grow-1">{category.name}</span>
            <i className="fas fa-chevron-right text-muted"></i>
          </div>
        ))}
      </div>
      
      {/* Filter Section */}
      <div className="mt-4">
        <h6 className="fw-bold mb-3">Filter by Price</h6>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="price1" 
            checked={priceFilter === "under2"}
            onChange={() => onPriceFilter(priceFilter === "under2" ? "" : "under2")}
          />
          <label className="form-check-label" htmlFor="price1">
            Under $2.00
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="price2" 
            checked={priceFilter === "2to5"}
            onChange={() => onPriceFilter(priceFilter === "2to5" ? "" : "2to5")}
          />
          <label className="form-check-label" htmlFor="price2">
            $2.00 - $5.00
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="price3" 
            checked={priceFilter === "over5"}
            onChange={() => onPriceFilter(priceFilter === "over5" ? "" : "over5")}
          />
          <label className="form-check-label" htmlFor="price3">
            Over $5.00
          </label>
        </div>
      </div>

      {/* Discount Filter */}
      <div className="mt-4">
        <h6 className="fw-bold mb-3">Discount</h6>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="discount1" 
            checked={discountFilter === "under10"}
            onChange={() => onDiscountFilter(discountFilter === "under10" ? "" : "under10")}
          />
          <label className="form-check-label" htmlFor="discount1">
            Under 10%
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="discount2" 
            checked={discountFilter === "10to20"}
            onChange={() => onDiscountFilter(discountFilter === "10to20" ? "" : "10to20")}
          />
          <label className="form-check-label" htmlFor="discount2">
            10% - 20%
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="discount3" 
            checked={discountFilter === "over20"}
            onChange={() => onDiscountFilter(discountFilter === "over20" ? "" : "over20")}
          />
          <label className="form-check-label" htmlFor="discount3">
            Over 20%
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
