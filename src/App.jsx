import {useState} from "react";
import birdsData from "./data/birds";
import bonusItems from "./data/bonusItems"
import { Header } from "./components/Header";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";

function App() {
const [birds, setBirds] = useState(birdsData);
const [cartItems, setCartItems] = useState([]);

const addToCart = (bird) => {
  // Will check for duplicates and add bird to cart
  // Update cartItems and totalCost accordingly
  setCartItems([...cartItems, bird]);
  console.log(`Added ${bird.name} to cart`);
};

const handleAdopt = (bird) => {
  // Perform the adoption process here, add the selected bird to the cart
  addToCart(bird); // Call addToCart function when a bird is adopted
  console.log(`Adopted ${bird.name}`);
};

const resetCart = () => {
  setCartItems([]);
  // Reset other cart-related state if needed (total cost, discounts)
};

  return (
    <div>
      <Header/>
      <main>
        <aside>
          <Cart 
            cartItems={cartItems} 
            addToCart = {addToCart}
          />
        </aside>
        <aside>
          <Cards 
            birds ={birds} 
            handleAdopt={handleAdopt} 
          />
        </aside>
        <section>
          <Checkout 
            resetCart={resetCart} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
