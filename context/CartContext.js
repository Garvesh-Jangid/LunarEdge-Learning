import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const buyNow = () => {
    if (cart.length === 0) {
      Alert.alert('Cart is empty', 'Please add items before buying.');
      return;
    }

    // Simulate checkout success
    Alert.alert('Order Placed', 'Thank you for your purchase!');
    setCart([]); // clear cart after purchase
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
