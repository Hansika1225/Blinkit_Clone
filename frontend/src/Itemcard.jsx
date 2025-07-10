import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Itemcard.css';

const Itemcard = ({ id, image, itemname, quantity, cost }) => {
  const { addToCart, removeFromCart, getItemQuantity } = useCart();

  const qty = getItemQuantity(id);

  return (
    <div className="item-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={image} alt={itemname} className="item-image" />
        <h2>{itemname}</h2>
        <p>{quantity}</p>
        <p>{cost}</p>
      </Link>

      <div style={{ marginTop: '8px' }}>
        {qty === 0 ? (
          <button
            onClick={() => addToCart({ _id: id, image, name: itemname, quantity, cost })}
            className="btn-cart"
          >
            Add to Cart
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => removeFromCart(id)} className="btn-cart">−</button>
            <span>{qty}</span>
            <button
              onClick={() => addToCart({ _id: id, image, name: itemname, quantity, cost })}
              className="btn-cart"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itemcard;
