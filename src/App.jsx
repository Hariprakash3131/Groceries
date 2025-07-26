import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderPayment from "./pages/OrderPayment";
import "./App.css";

function App() {
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Router>
        <div className="App harip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-payment" element={<OrderPayment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
