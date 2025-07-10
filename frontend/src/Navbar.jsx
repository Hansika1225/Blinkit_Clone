import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from './CartContext';

const Navbar = ({ setShowLogin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className='navbar'>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.I0ViwSDS-8qCHr1w5blJVAHaHa&pid=Api&P=0&h=180"
        alt="logo"
        className="logo"
      />

      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />

      <button onClick={handleSearchClick}>Search</button>

      <div id="links">
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>

      <div id="buttons">
        <Link to="/cart" id="cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IoCartOutline />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
