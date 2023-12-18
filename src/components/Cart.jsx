import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  let total = 0;
  const removeItem = (id) => {
    console.log(id);
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart([...filteredCart]);
  }
  const calculateTotal = () => {
    total = cart.reduce((sum, item) => sum + item.amount, 0);
    calculateDiscount();
    return total;
  }

  const calculateDiscount = () => {
    if (cart.length > 2) {
      total = total * 0.9;
      console.log(total)
    }
    return cart.length > 2 ? 10 : 0;
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: ${calculateTotal()}</h4>
      <h5>Discount: {calculateDiscount()}%</h5>
      <ol>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <span> ${item.amount}</span>
              <span onClick={() => removeItem(item.id)}> 🗑️</span>
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default Cart;
