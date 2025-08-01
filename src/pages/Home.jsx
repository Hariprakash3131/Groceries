import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategorySidebar from '../components/CategorySidebar';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import { products } from '../api/mockApi';
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // null = all categories
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(''); // "", "under2", "2to5", "over5"
  const [discountFilter, setDiscountFilter] = useState(''); // "", "under10", "10to20", "over20"

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Filter products by selected category, search query, price, and discount
  const filteredProducts = products.filter(product => {
    // Category filter
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    // Search filter
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price filter
    let matchesPrice = true;
    if (priceFilter === "under2") matchesPrice = product.price < 2;
    else if (priceFilter === "2to5") matchesPrice = product.price >= 2 && product.price <= 5;
    else if (priceFilter === "over5") matchesPrice = product.price > 5;
    
    // Discount filter
    let matchesDiscount = true;
    if (discountFilter === "under10") matchesDiscount = product.discount < 10;
    else if (discountFilter === "10to20") matchesDiscount = product.discount >= 10 && product.discount <= 20;
    else if (discountFilter === "over20") matchesDiscount = product.discount > 20;

    return matchesCategory && matchesSearch && matchesPrice && matchesDiscount;
  });

  // Add to cart function
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Increase cart item quantity
  const handleIncreaseQty = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease cart item quantity
  const handleDecreaseQty = (productId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Clear category filter when searching
    setDisplayedProducts(12); // Reset displayed products
  };

  // Handle price filter
  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
    setDisplayedProducts(12);
  };

  // Handle discount filter
  const handleDiscountFilter = (filter) => {
    setDiscountFilter(filter);
    setDisplayedProducts(12);
  };

  // Load more products
  const handleLoadMore = () => {
    setDisplayedProducts(prev => prev + 8);
  };

  // Determine column size based on number of products
  let colClass = 'col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex';
  if (filteredProducts.length === 1) {
    colClass = 'col-12 d-flex justify-content-center';
  } else if (filteredProducts.length === 2) {
    colClass = 'col-md-6 col-12 d-flex justify-content-center';
  } else if (filteredProducts.length === 3) {
    colClass = 'col-md-4 col-12 d-flex justify-content-center';
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar cartItems={cartItems} cartTotal={cartTotal} />
      <Banner onSearch={handleSearch} searchQuery={searchQuery} />
      <main className="main-content flex-grow-1">
        <div className="container-fluid px-lg-5 px-2">
          {/* Search Results Header */}
          {searchQuery && (
            <div className="search-results-header mb-4">
              <h4 className="text-success">
                <i className="fas fa-search me-2"></i>
                Search Results for "{searchQuery}"
              </h4>
              <p className="text-muted">{filteredProducts.length} items found</p>
            </div>
          )}
          
          <div className="row g-4 align-items-start">
            {/* Sidebar (desktop) */}
            <div className="col-lg-3 mb-4 d-none d-lg-block">
              <CategorySidebar
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
                priceFilter={priceFilter}
                onPriceFilter={handlePriceFilter}
                discountFilter={discountFilter}
                onDiscountFilter={handleDiscountFilter}
              />
            </div>
            {/* Mobile sidebar button */}
            <div className="d-block d-lg-none mb-3">
              <button className="btn btn-outline-success w-100 fw-bold" onClick={() => setMobileSidebarOpen(true)}>
                <i className="fas fa-bars me-2"></i>Categories
              </button>
            </div>
            {/* Products Grid */}
            <div className="col-lg-9">
              <div className={`row g-4 justify-content-center${filteredProducts.length <= 3 ? ' align-items-stretch' : ''}`} style={{ minHeight: '300px', paddingTop: '10px' }}>
                {filteredProducts.length === 0 ? (
                  <div className="col-12 d-flex justify-content-center align-items-center" style={{ minHeight: '250px' }}>
                    <div className="text-center text-muted fs-4 fw-semibold">
                      {searchQuery ? `No products found for "${searchQuery}"` : 'No products found in this category.'}
                    </div>
                  </div>
                ) : (
                  filteredProducts.slice(0, displayedProducts).map((product) => (
                    <div key={product.id} className={colClass}>
                      <ProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    </div>
                  ))
                )}
              </div>
              {/* Load More Button */}
              {displayedProducts < filteredProducts.length && (
                <button
                  className="load-more-btn"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Mobile sidebar drawer */}
        {mobileSidebarOpen && (
          <>
            <div className="mobile-sidebar-overlay" onClick={() => setMobileSidebarOpen(false)} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.3)',zIndex:1999}}></div>
            <CategorySidebar
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              mobileOpen={true}
              onClose={() => setMobileSidebarOpen(false)}
              priceFilter={priceFilter}
              onPriceFilter={handlePriceFilter}
              discountFilter={discountFilter}
              onDiscountFilter={handleDiscountFilter}
            />
          </>
        )}
      </main>
      <Cart
        cartItems={cartItems}
        cartTotal={cartTotal}
        isOpen={isCartOpen}
        onToggle={() => setIsCartOpen(!isCartOpen)}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
      />
      <Footer />
    </div>
  );
};

export default Home;
