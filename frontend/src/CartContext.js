import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item (increment quantity if exists)
  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i._id === item._id);
      if (existingItem) {
        return prev.map(i =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };


  const removeFromCart = (itemId) => {
  console.log('Removing item with id:', itemId);
  setCartItems(prev => {
    console.log('Current cart:', prev);
    const updated = prev
      .map(i =>
        i._id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter(i => i.quantity > 0);
    console.log('Updated cart:', updated);
    return updated;
  });
};


 const isInCart = (itemId) => {
  return cartItems.some(item => String(item._id) === String(itemId));
};

const getItemQuantity = (itemId) => {
  const item = cartItems.find(i => String(i._id) === String(itemId));
  return item ? item.quantity : 0;
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
