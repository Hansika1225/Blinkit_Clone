import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  
  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.cost.replace(/[^\d]/g, '')); 
    return sum + price * item.quantity;
  }, 0);

  const handleBuyNow = () => {
    alert('Proceeding to buy items in the cart');
  };

  return (
    <div className="cart-page" style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item._id} style={{ marginBottom: '10px' }}>
                <img src={item.image} alt={item.name} width={50} />
                <strong> {item.name} </strong> – Qty: {item.quantity} – {item.cost}
                <button
                  onClick={() => removeFromCart(item._id)}
                  style={{
                    marginLeft: '10px',
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                  }}
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button
            onClick={handleBuyNow}
            style={{
              backgroundColor: '#0c831f',
              color: 'white',
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Proceed to Buy
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
