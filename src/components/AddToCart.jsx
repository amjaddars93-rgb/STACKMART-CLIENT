import React, { useEffect, useState } from 'react';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  if (cartItems.length === 0) return <p>No items in cart</p>;

  return (
    <div>
      <h2>Add To Cart Items</h2>
      {cartItems.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <img src={item.image} alt={item.name} width="100" />
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
