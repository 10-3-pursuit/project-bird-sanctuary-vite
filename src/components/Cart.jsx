import React, { useState } from "react";
import bonusItems from "../data/bonusItems";


const Cart = ({exoticBird, setExocticBird, totalPrice, setTotalPrice, setDiscount}) => {
  // State to track selected bonus items
  const [ bonusItemsSelected, setBonusItemsSelected ] = useState([]);
 
// Function to handle the removal of a bird from the cart
  const handleDelete = (bird) => {
   
    // Filter out the selected bird from the cart
   const filteredBird = exoticBird.filter((item) => item.id !== bird.id);
   setExocticBird(filteredBird);
    
   // Update total price after removal
   const updatedTotalPrice = calculateTotal(filteredBird);
    setTotalPrice(updatedTotalPrice);
     
    // Update selected bonus items
    const addedBonusItem = exoticBird.filter((item) => bonusItems.some((bonus) => bonus.birdId === item.id));
  setBonusItemsSelected(addedBonusItem);
    
  };
  
  // Function to calculate the total price of items in the cart
  const calculateTotal = (arr) => {
    return arr.reduce((acc, item) => acc + item.amount, 0);
  };

   // Calculate discount based on the number of items in the cart
  const calculatedDiscount = exoticBird.length < 3 ? 0 : 0.1;
  setDiscount(calculatedDiscount);
  
// Function to calculate bonus items based on the total price
  const calculateBonuses = (arr) => {
    const total = calculateTotal(arr);

    // Bonus items logic based on total price ranges
if (total >= 100 && total < 300) return bonusItems.slice(0, 1);
if (total >= 300 && total < 500) return bonusItems.slice(0, 2);
if (total >= 500 && total < 1000) return bonusItems.slice(0, 3);
if (total >= 1000) return bonusItems.slice();

return [];
};

  // Calculate total price after discount
 const totalPriceNoDiscount = totalPrice - totalPrice * calculatedDiscount;

 // Calculate selected bonus items
   const selectedBonuses = calculateBonuses(exoticBird);

  return (
    <div className="cart">
      <h2>Cart Component</h2>
     
      <ol>
        {exoticBird.map((bird) => {
          return(
          <li key={bird.id}>
            {bird.name} - ${bird.amount}
            <button onClick={() => handleDelete(bird)}>Delete</button>
          </li>
          );
        })}
      </ol>
      <h4>Total: ${totalPriceNoDiscount.toFixed(2)}</h4>
      {calculatedDiscount > 0 && <h5>Discount: {calculatedDiscount * 100}</h5>}
      {bonusItemsSelected.length > 0 && (
        <div> 
        <h4>Bonus Items:</h4>
        <ul>
         {selectedBonuses.map((item) => {
          <li key={item.id}>
            {item.name} - ${item.amount}
          </li> 
         })} 
        </ul>
       </div>
  )}
 
    </div>
  );
};

export default Cart;
