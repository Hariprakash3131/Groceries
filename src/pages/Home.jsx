import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { products } from "../api/mockApi";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); // "", "under2", "2to5", "over5"
  const [discountFilter, setDiscountFilter] = useState(""); // "", "under10", "10to20", "over20"
  const productGridRef = useRef(null);

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Category
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    // Search
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    // Price
    let matchesPrice = true;
    if (priceFilter === "under2") matchesPrice = product.price < 2;
    else if (priceFilter === "2to5") matchesPrice = product.price >= 2 && product.price <= 5;
    else if (priceFilter === "over5") matchesPrice = product.price > 5;
    // Discount
    let matchesDiscount = true;
    if (discountFilter === "under10") matchesDiscount = product.discount < 10;
    else if (discountFilter === "10to20") matchesDiscount = product.discount >= 10 && product.discount <= 20;
    else if (discountFilter === "over20") matchesDiscount = product.discount > 20;

    return matchesCategory && matchesSearch && matchesPrice && matchesDiscount;
  });

  // Add to cart function
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
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
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease cart item quantity
  const handleDecreaseQty = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Load more products
  const handleLoadMore = () => {
    setDisplayedProducts((prev) => prev + 8);
  };

  // Add search handler
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Always search across all categories
    setDisplayedProducts(12);
    setTimeout(() => {
      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Price filter handler
  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
    setDisplayedProducts(12);
  };

  // Discount filter handler
  const handleDiscountFilter = (filter) => {
    setDiscountFilter(filter);
    setDisplayedProducts(12);
  };

  // Handler for best offers (high discount)
  const handleOffersClick = () => {
    setDiscountFilter("over20");
    setPriceFilter("");
    setSelectedCategory(null);
    setSearchQuery("");
    setDisplayedProducts(12);
    setTimeout(() => {
      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar 
        cartItems={cartItems} 
        cartTotal={cartTotal} 
        onCartOpen={() => setIsCartOpen(true)}
        onOffersClick={handleOffersClick}
      />
      <Banner 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      <main className="main-content flex-grow-1">
        <div className="container-fluid px-lg-5 px-2">
          {searchQuery && (
            <div className="search-results-header my-3">
              <h4>Search Results for "{searchQuery}"</h4>
              <p>{filteredProducts.length} items found</p>
            </div>
          )}
          <div className="">
            <div className="categories" style={{ maxWidth: "100%", display: "flex", gap: "20px" }}>
              <CategorySidebar
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
                priceFilter={priceFilter}
                onPriceFilter={handlePriceFilter}
                discountFilter={discountFilter}
                onDiscountFilter={handleDiscountFilter}
              />

              <div className="flex-grow-1" ref={productGridRef}>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-5">
                    <div className="no-results">
                      <i className="fas fa-search mb-3" style={{ fontSize: "3rem", color: "#ccc" }}></i>
                      <h4>No products found</h4>
                      <p className="text-muted">
                        Try adjusting your search or filter to find what you're looking for.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="row g-4 justify-content-center align-items-stretch"
                       style={{ minHeight: "300px", paddingTop: "10px" }}>
                    {filteredProducts
                      .slice(0, displayedProducts)
                      .map((product) => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex">
                          <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                          />
                        </div>
                      ))}
                  </div>
                )}
                {filteredProducts.length > displayedProducts && (
                  <div className="text-center mt-4">
                    <button 
                      className="btn btn-outline-primary"
                      onClick={handleLoadMore}
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
