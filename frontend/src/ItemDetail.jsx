import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(itemId);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`http://localhost:5000/items`);
        const data = await res.json();
        const foundItem = data.find((i) => i._id === itemId);
        setItem(foundItem);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Item not found</div>;

  const handleAddToCart = () => {
    inCart ? removeFromCart(item._id) : addToCart(item);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy: ${item.name}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} style={{ width: '200px' }} />
      <p><strong>Quantity:</strong> {item.quantity}</p>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p><strong>Description:</strong> {item.description}</p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleAddToCart}
          style={{
            padding: '10px 16px',
            marginRight: '10px',
            backgroundColor: inCart ? '#c62828' : '#0c831f',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>

        <button
          onClick={handleBuyNow}
          style={{
            padding: '10px 16px',
            backgroundColor: '#ff9f00',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
