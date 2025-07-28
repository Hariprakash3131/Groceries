import React, { useState, useEffect } from 'react';
import { banners } from '../api/mockApi';
import './Banner.css';

const Banner = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery || "");

  // Sync local state with parent searchQuery
  useEffect(() => {
    setLocalQuery(searchQuery || "");
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(localQuery.trim());
    }
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
              <div className="search-bar d-flex align-items-center">
                <input 
                  type="text" 
                  className="search-input flex-grow-1" 
                  placeholder="Search your products from here"
                  value={localQuery}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <button className="search-button ms-2" onClick={handleSearch}>
                  <i className="fas fa-search me-2"></i>
                  Search
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
          {banners.map((banner) => (
            <div key={banner.id} className="col-md-4">
              <div 
                className="banner-card"
                style={{
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  minHeight: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  padding: '2rem',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Overlay for better text readability */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.4)',
                    zIndex: 1
                  }}
                ></div>
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h5 className="fw-bold mb-2">{banner.title}</h5>
                  <p className="mb-3">{banner.subtitle}</p>
                  <button 
                    className="btn btn-light btn-sm banner-btn-green"
                    style={{
                      borderRadius: '20px',
                      padding: '0.5rem 1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      background: '#28a745',
                      color: 'rgb(233, 243, 230)',
                      border: 'none'
                    }}
                  >
                    {banner.buttonText}
                  </button>
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
