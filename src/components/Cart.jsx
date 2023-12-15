import { useState, useEffect } from "react";


const Cart = ({cartItems, setCartItems,addToCart}) => {

  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItems, setBonusItems] = useState([]);

  const removeFromCart = (birdId) => {
    const updatedCart = cartItems.filter((bird) => bird.id !== birdId);
    setCartItems(updatedCart, () =>{
    console.log(updatedCart);
    });
  };

  useEffect(() => {
    calculateTotalCost(); // Call the function that calculates the total cost
  }, [cartItems]); 
  
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
        {bonusItems.map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
