import  React, { useState } from "react";
import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import "./index.css"

function App() {
// State to track selected birds in the cart
const [ exoticBird, setExocticBird] = useState([]);
// State to track the total price of selected birds
const [ totalPrice, setTotalPrice ] = useState(0);
// State to track the discount percentage
const [ discount, setDiscount ] =  useState(0);

// Function to add a bird to the cart
const addToCart = (ele) => {
   // Check if the bird is already in the cart
  const isBirdInCart = exoticBird.some((item) => item.id === ele.id);
   if (isBirdInCart){
    alert("Bird Already Chosen");
    return;
   }
   // Update the cart and total price
  setExocticBird([...exoticBird, ele]);
  setTotalPrice(totalPrice + ele.amount);
  
};
// Function to handle the checkout process
const handleCheckout = (infoData) =>{
  console.log("Handling checkout:", infoData);
   // Reset the cart after checkout
handleResetCart();
};
// Function to reset the cart
  const handleResetCart = () => {
setExocticBird([]);
setTotalPrice(0);
setDiscount(0)
  }


 return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
       
      <main>
        <aside>
          <Cart exoticBird={exoticBird} setExocticBird={setExocticBird} totalPrice={totalPrice} setTotalPrice={setTotalPrice} discount={discount} setDiscount={setDiscount}/>
           <Checkout
         onCheckout={handleCheckout}
         onResetCart={handleResetCart}
         />
        </aside>
         <Cards exoticBird={birdData} addToCart={addToCart}/>
        
         </main>
    </div>
  );
}

export default App;
