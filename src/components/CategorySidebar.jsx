import React from "react";
import { categories } from "../api/mockApi";
import "./CategorySidebar.css";

const CategorySidebar = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-sidebar">
      <h5 className="mb-3 fw-bold">Categories</h5>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item d-flex align-items-center ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => onCategorySelect(category.id[1])}
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
          <input className="form-check-input" type="checkbox" id="price1" />
          <label className="form-check-label" htmlFor="price1">
            Under $2.00
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="price2" />
          <label className="form-check-label" htmlFor="price2">
            $2.00 - $5.00
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="price3" />
          <label className="form-check-label" htmlFor="price3">
            Over $5.00
          </label>
        </div>
      </div>
      {/* Discount Filter */}
      <div className="mt-4">
        <h6 className="fw-bold mb-3">Discount</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="discount1" />
          <label className="form-check-label" htmlFor="discount1">
            Under 10%
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="discount2" />
          <label className="form-check-label" htmlFor="discount2">
            10% - 20%
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="discount3" />
          <label className="form-check-label" htmlFor="discount3">
            Over 20%
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
