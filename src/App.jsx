import { useState } from "react";
import "./index.css"
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import birddata from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";

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
  
    if (cartItems.find((item) => item.id === bird.id)) {
      alert('Bird Already Chosen');
    } else {
      setCartItems([...cartItems, bird]);
      updateTotalAndDiscount([...cartItems, bird]); // Pass the updatedCart directly
    }
  };
  
  // HANDLE TO REMOVE FROM CART FUNCTION

  const handleRemoveFromCart = (bird) => {
    const updatedCart = cartItems.filter((item) => item.name !== bird.name);
    setCartItems(updatedCart);
    updateTotalAndDiscount(updatedCart)
  }
  // Apply a 10% discount for 3 or more birds in the cart.
  // DISCOUNT FUNCTION
  
  const updateTotalAndDiscount = (updatedCart) => {
    let checkoutTotal = 0;
    updatedCart.forEach((item) => (checkoutTotal += item.amount));
  
    let discountTotal = 0;
    if (updatedCart.length >= 3) {
      discountTotal = 10;
      const discountAmount = (checkoutTotal * discountTotal) / 100
      checkoutTotal -= discountAmount;
    }

    setCheckoutTotal(checkoutTotal);
    setDiscountTotal(discountTotal);
       
// Determine bonus items based on the updated total
const prizes = [100, 300, 500, 1000];
let bonusCounts = 0;

if (checkoutTotal >= prizes[3]) {
  bonusCounts = 4;
} else if (checkoutTotal >= prizes[2]) {
  bonusCounts = 3;
} else if (checkoutTotal >= prizes[1]) {
  bonusCounts = 2;
} else if (checkoutTotal >= prizes[0]) {
  bonusCounts = 1;
}

// Get the bonus items based on the determined count
const bonusItemsToShow = bonusItems.slice(0, bonusCounts);

// Set state for bonus items
setBonusItems(bonusItemsToShow);
  }
  
  


  const resetCart = () => {
    // Implement logic to clear the cart, discounts, and bonus items
    setCartItems([]);
    setCheckoutTotal(0);
    setDiscountTotal(0);
  };
  

  return (
    <div className="cart">
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          checkoutTotal={checkoutTotal}
          discountTotal={discountTotal}
          bonusItems={bonusItemsToShow}
        />
        <Checkout clearCart={resetCart} cartlength={cartItems.length} />
        <Cards birds={birddata} handleAddToCart={handleAddToCart} />
        <aside></aside>
      </main>
    </div>
  );
}

export default App;