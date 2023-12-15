import { useState } from "react";


const Cart = ({cartItems, setCartItems,addToCart,resetCart}) => {

  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItems, setBonusItems] = useState([]);

  const removeFromCart = (birdId) => {
    const updatedCart = cartItems.filter((bird) => bird.id !== birdId);
    setCartItems(updatedCart);
    console.log(updatedCart);
    calculateTotalCost();
  };
  const calculateTotalCost = () => {
    // it will calculate total cost and apply discounts based on cartItems
    //  it will update totalCost and discount accordingly
    let total = 0;
    cartItems.forEach((bird) => {
      total += bird.amount;
    });
  
    // const discountApplied = total > 500 ? 50 : 0; // Apply discount based on total cost
    // const discountedTotal = total - discountApplied;
  
    // setDiscount(discountApplied);
    setTotalCost(total);
  };

  const displayBonusItems = () => {
    const bonus = totalCost > 1000 ? ['Bonus 1', 'Bonus 2'] : [];
    setBonusItems(bonus);
  };
  const handleCheckout = () => {
    // it will handle the checkout process
    // Reset cartItems, totalCost, discount, and bonusItems
    resetCart();
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
