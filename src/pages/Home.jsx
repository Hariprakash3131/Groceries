import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { products } from "../api/mockApi";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // null = all categories
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(12);

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar cartItems={cartItems} cartTotal={cartTotal} onCartOpen={() => setIsCartOpen(true)} />
      <Banner />
      <main className="main-content flex-grow-1">
        <div className="container-fluid px-lg-5 px-2">
          <div className="">
            <div
              className="categories"
              style={{ maxWidth: "100%", display: "flex", gap: "20px" }}
            >
              <CategorySidebar
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />

              <div style={{}}>
                <div
                  className="row g-4 justify-content-center align-items-stretch"
                  style={{ minHeight: "300px", paddingTop: "10px" }}
                >
                  {filteredProducts.length === 0 ? (
                    <div>
                      <div>No products found in this category.</div>
                    </div>
                  ) : (
                    filteredProducts
                      .slice(0, displayedProducts)
                      .map((product) => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex">
                          <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                          />
                        </div>
                      ))
                  )}
                </div>
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
