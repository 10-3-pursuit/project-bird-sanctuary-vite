import { useState, useEffect } from "react";
import bonusItems from "../data/bonusItems";


const Cart = ({cartItems, setCartItems,addToCart}) => {

  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);



  
  // Call the function that calculates the total cost
  useEffect(() => {
    calculateTotalCost(); 
  }, [cartItems]); 
  
  
  const removeFromCart = (birdId) => {
    const updatedCart = cartItems.filter((bird) => bird.id !== birdId);
    setCartItems(updatedCart)
  };

  const calculateTotalCost = () => {
    // it will calculate total cost and apply discounts based on cartItems
    //  it will update totalCost and discount accordingly
    let total = 0;
    cartItems.forEach((bird) => {
      total += bird.amount;
    });
    const calculatedDiscount = calculateDiscount(cartItems);
    const discountAmount = total * calculatedDiscount;
    const discountedTotal = total - discountAmount;
    
    setDiscount(calculatedDiscount);
    setTotalCost(discountedTotal);
  };

  const calculateDiscount = (cartItems) => {
    const minBirdsForDiscount = 3;
    const cartItemCount = cartItems.length;
  
    return cartItemCount >= minBirdsForDiscount ? 0.10 : 0;
  };


  

  const displayBonusItems = () => {
    const thresholds = [100, 300, 500, 1000];
    let bonuses = [];
  
    for (let i = 0; i < thresholds.length; i++) {
      if (totalCost >= thresholds[i] && bonusItems[i] !== undefined) {
        bonuses = bonusItems.slice(0, i + 1);
      } else {
        break;
      }
    }
    return bonuses.map((bonus, index) => <li key={index}>{bonus}</li>);
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
      <h5>Discount: {discount}%</h5>
      <h4>Total Cost: ${totalCost}</h4>
      <h3>Bonus Items in Cart:</h3>
      <ul>{displayBonusItems()}</ul>   
    </div>
  );
};

export default Cart;
