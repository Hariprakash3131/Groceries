import React, { useState } from 'react';
import { banners } from '../api/mockApi';
import './Banner.css';

const Banner = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery || "");

  // Sync local state with parent searchQuery
  React.useEffect(() => {
    setLocalQuery(searchQuery || "");
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(localQuery.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Groceries Delivered in 90 Minute
              </h1>
              <p className="lead mb-4">
                Get your healthy foods & snacks delivered at your doorsteps all day everyday
              </p>
              {/* Search Bar */}
              <div className="search-bar">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search your products from here"
                  value={localQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <button className="search-button" onClick={handleSearch}>
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Hero Background Images */}
              <div className="position-relative d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=400&fit=crop" 
                  alt="Fresh Produce" 
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="container mb-5">
        <div className="row g-4">
          {banners.map(b => (
            <div key={b.id} className="col-md-4">
              <div
                className="banner-card"
                style={{
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="overlay"></div>
                <div className="content">
                  <h5 className="fw-bold">{b.title}</h5>
                  <p>{b.subtitle}</p>
                  <button className="btn btn-light btn-sm">{b.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
