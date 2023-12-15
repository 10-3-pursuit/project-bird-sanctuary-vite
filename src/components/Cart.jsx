import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItems, setBonusItems] = useState([]);

  const removeFromCart = (birdId) => {
    // it will remove bird from cart
    // Update cartItems and totalCost accordingly
  };
  const calculateTotalCost = () => {
    // it will calculate total cost and apply discounts based on cartItems
    //  it will update totalCost and discount accordingly
  };

  const displayBonusItems = () => {
    // it will display bonus items based on total cost
    // Update bonusItems accordingly
  };
  const handleCheckout = () => {
    // it will handle the checkout process
    // Reset cartItems, totalCost, discount, and bonusItems
  };


  return (
    <div className="cart">
      <h2>Cart Component</h2>
            {/* Display cart items */}
            <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Amount: {item.amount}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ol>
      <h4>Total Cost: ${totalCost}</h4>
      <h5>Discount: {discount}%</h5>
      <ul>
        {bonusItems.map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
      {/* Checkout button */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
