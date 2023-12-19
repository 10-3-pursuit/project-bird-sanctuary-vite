import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import birddata from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import "./index.css"

// CART COMPONENT SECTION //
function App() {
  // Bonus items
  const [bonusItemsToShow, setBonusItems] = useState([]);
  // CART ITEMS
  const [cartItems, setCartItems] =  useState([]);
  //TOTAL
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  //DISCOUNTS
  const [discountTotal, setDiscountTotal] = useState(0);

//HANDLE TO ADD TO CART FUNCTION
const handleAddToCart = (bird) => {
  // Check if the bird is already in the cart based on its id
  if (cartItems.find((item) => item.id === bird.id)) {
    // If the bird is already in the cart, show an alert
    alert('Bird Already Chosen');
  } else {
    // If the bird is not in the cart, add it to the cart
    setCartItems([...cartItems, bird]);

    // Update the total and discount based on the updated cart
    updateTotalAndDiscount([...cartItems, bird]); // Pass the updatedCart directly
  }
}
// HANDLE TO REMOVE FROM CART FUNCTION
const handleRemoveFromCart = (bird) => {
  // Use the filter method to create a new array without the specified bird
  const updatedCart = cartItems.filter((item) => item.name !== bird.name);

  // Update the cartItems state with the new array (excluding the removed bird)
  setCartItems(updatedCart);

  // Call the updateTotalAndDiscount function to recalculate total and discounts
  updateTotalAndDiscount(updatedCart);
}
// Apply a 10% discount for 3 or more birds in the cart.
// DISCOUNT FUNCTION
// This function updates the total cost, applies discounts, and determines bonus items based on the cart contents.

const updateTotalAndDiscount = (updatedCart) => {
  // Calculate the total cost by summing up the amounts of each bird in the cart
  let checkoutTotal = 0;
  updatedCart.forEach((item) => (checkoutTotal += item.amount));

  // Apply a 10% discount if there are 3 or more items in the cart
  let discountTotal = 0;
  if (updatedCart.length >= 3) {
    discountTotal = 10;
    const discountAmount = (checkoutTotal * discountTotal) / 100;
    checkoutTotal -= discountAmount;
  }

  // Set the state for the updated total cost and discount
  setCheckoutTotal(checkoutTotal);
  setDiscountTotal(discountTotal);

  // Determine bonus items based on the updated total cost
  const prizes = [100, 300, 500, 1000];
  let bonusCounts = 0;

  // Check total cost against predefined thresholds to determine bonus counts
  if (checkoutTotal >= prizes[3]) {
    bonusCounts = 4;
  } else if (checkoutTotal >= prizes[2]) {
    bonusCounts = 3;
  } else if (checkoutTotal >= prizes[1]) {
    bonusCounts = 2;
  } else if (checkoutTotal >= prizes[0]) {
    bonusCounts = 1;
  }

  // Get bonus items based on the determined count
  const bonusItemsToShow = bonusItems.slice(0, bonusCounts);

  // Set state for bonus items to display in the cart
  setBonusItems(bonusItemsToShow);
};
  
// This function resets the cart, total cost, and discounts to their initial states.

const resetCart = () => {
  // Clear the cart by setting it to an empty array
  setCartItems([]);
  setBonusItems

  // Reset total cost and discount to their initial values (0)
  setCheckoutTotal(0);
  setDiscountTotal(0);
};
  
return (
  <div>
    <header className="header">
      <h1>Bird Sanctuary</h1>
      <h2>Donate to adopt a bird</h2>
    </header>
    <main>
      <aside>
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          checkoutTotal={checkoutTotal}
          discountTotal={discountTotal}
          bonusItems={bonusItemsToShow}
        />
        <Checkout resetCart={resetCart} cartlength={cartItems.length} />
      </aside>
      <Cards birds={birddata} handleAddToCart={handleAddToCart} />
    </main>
  </div>
);
}

export default App;