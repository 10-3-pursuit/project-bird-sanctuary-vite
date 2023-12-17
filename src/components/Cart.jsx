import { useState, useEffect } from "react";


const Cart = ({cartItems, setCartItems,addToCart ,bonusItems}) => {

  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItemsState, setBonusItemsState] = useState([]);


  
  // Call the function that calculates the total cost
  useEffect(() => {
    calculateTotalCost(); 
  }, [cartItems]); 
  
  // // Display bonus items whenever total cost changes
  // useEffect(() => {
  //   displayBonusItems(); 
  // }, [totalCost]);
  
  const removeFromCart = (birdId) => {
    const updatedCart = cartItems.filter((bird) => bird.id !== birdId);
    setCartItems(updatedCart, () =>{
    console.log(updatedCart);
    });
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

  const calculateDiscount = (totalCost) => {
    const minBirdsForDiscount = 3;
    const cartItemCount = cartItems.length;
  
    return cartItemCount >= minBirdsForDiscount ? 0.10 : 0;
  };


  

  const displayBonusItems = () => {
    
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
      <ul>
        {bonusItems && bonusItems.map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
