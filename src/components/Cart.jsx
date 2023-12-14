import { useState } from "react";

const Cart = () => {
  const [discount, setDiscount] = useState(0)
  const addDiscount = () => {

  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h5>Discount: {discount}%</h5>
      <h4>Total: $</h4>
      <ol>{/* Cart Items */}</ol>
      <p>Your donations have qualified you for the following items:</p>
    </div>
  );
};

export default Cart;
