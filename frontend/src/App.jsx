import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPopup from './LoginPopup';
import BlinkitHome from './BlinkitHome';
import CategoryItems from './CategoryItems';
import ItemDetail from './ItemDetail';
import { CartProvider } from './CartContext';
import CartPage from './CartPage.jsx';
import SearchResults from './SearchResults'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <CartProvider>
      <Router>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<BlinkitHome />} />
          <Route path="/category/:categoryName" element={<CategoryItems />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>

        {showLogin && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={() => setShowLogin(true)}>Login</button>
                 {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
            </div>
          </div>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
