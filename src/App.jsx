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
  const isDuplicate = cartItems.some((item) => item.id === bird.id);
  if (!isDuplicate) {
    // if Bird not a duplicate, add it to the cart
     const updatedCart = [...cartItems, bird];
     setCartItems(updatedCart)
    console.log(`Added ${bird.name} to cart`);
    // Update cartItems and totalCost accordingly

  }else{
    alert(`${bird.name} is already in the cart`);
  }
};

const handleAdopt = (bird) => {
  // Perform the adoption process here, add the selected bird to the cart
  addToCart(bird); // Call addToCart function when a bird is adopted
  console.log(`Adopted ${bird.name}`);
};



  return (
    <div>
      <Header/>
      <main>
        <aside>
          <Cart 
            cartItems={cartItems} 
            setCartItems = {setCartItems}
            addToCart = {addToCart}
          />
        
          <Checkout 
            setCartItems = {setCartItems}
            cartItems = {cartItems}
            />
        </aside>
        
        <section>
          <Cards 
            birds ={birds} 
            handleAdopt={handleAdopt} 
            />
        </section>
        
      </main>
    </div>
  );
}

export default App;
