import React from "react";
import { categories, getProductsByCategory } from "../api/mockApi";
import "./CategorySidebar.css";

const CategorySidebar = ({
  selectedCategory,
  onCategorySelect,
  priceFilter,
  onPriceFilter,
  discountFilter,
  onDiscountFilter,
  mobileOpen,
  onClose
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
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => {
              onCategorySelect(category.id);
              if (mobileOpen && onClose) onClose();
            }}
          >
            <span className="me-3" style={{ fontSize: "1.2rem" }}>
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
            type="radio" 
            id="price1"
            checked={priceFilter === "under2"}
            onChange={() => onPriceFilter("under2")}
            name="price"
          />
          <label className="form-check-label" htmlFor="price1">
            Under $2.00
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="price2"
            checked={priceFilter === "2to5"}
            onChange={() => onPriceFilter("2to5")}
            name="price"
          />
          <label className="form-check-label" htmlFor="price2">
            $2.00 - $5.00
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="price3"
            checked={priceFilter === "over5"}
            onChange={() => onPriceFilter("over5")}
            name="price"
          />
          <label className="form-check-label" htmlFor="price3">
            Over $5.00
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="priceAll"
            checked={priceFilter === ""}
            onChange={() => onPriceFilter("")}
            name="price"
          />
          <label className="form-check-label" htmlFor="priceAll">
            All
          </label>
        </div>
      </div>
      {/* Discount Filter */}
      <div className="mt-4">
        <h6 className="fw-bold mb-3">Discount</h6>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="discount1"
            checked={discountFilter === "under10"}
            onChange={() => onDiscountFilter("under10")}
            name="discount"
          />
          <label className="form-check-label" htmlFor="discount1">
            Under 10%
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="discount2"
            checked={discountFilter === "10to20"}
            onChange={() => onDiscountFilter("10to20")}
            name="discount"
          />
          <label className="form-check-label" htmlFor="discount2">
            10% - 20%
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="discount3"
            checked={discountFilter === "over20"}
            onChange={() => onDiscountFilter("over20")}
            name="discount"
          />
          <label className="form-check-label" htmlFor="discount3">
            Over 20%
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            id="discountAll"
            checked={discountFilter === ""}
            onChange={() => onDiscountFilter("")}
            name="discount"
          />
          <label className="form-check-label" htmlFor="discountAll">
            All
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
