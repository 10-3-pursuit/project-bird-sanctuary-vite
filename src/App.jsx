import { useState } from "react";
import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

function App() {

  const birds = birdData;

  const [cartContent, setCartContent] = useState([]);

  const [total, setTotal] = useState(0);

  const [discount, setDiscount] = useState(0);

  function addToCart(birdId, birdAmount) {
    const addBird = birds.find((bird)=> bird.id === birdId);
    if(addBird && !cartContent.some((bird) => bird.id === addBird.id)){
      const updatedCartContent = [...cartContent, addBird];
      setCartContent(updatedCartContent);
      applyDiscount(birdAmount, updatedCartContent);
    }
    else {
      alert('Bird Already Chosen. Try selecting a different bird!');
    }
  }

  function removeBird(birdId, birdAmount) {
    const filteredCart = cartContent.filter((bird) => birdId !== bird.id);
    const discountedBird = birdAmount * 0.9;
    setCartContent(filteredCart);


    if(filteredCart.length === 2) {
      const newTotal = total / 0.9 - birdAmount;
      setTotal(newTotal);
    }
    else if(filteredCart.length >= 3) {
      const newTotal = total - (total * 0.10);
      setTotal(newTotal);
    }
    else {
      setTotal(total - birdAmount);
    }

  }
  // discount 10% off from the total not from each bird.

  function applyDiscount(birdAmount, updatedCartContent) {
    if(updatedCartContent.length === 3){
      const discountTotal = (total + birdAmount) * 0.9;
      setTotal(discountTotal);
      setDiscount(10);
    }
    else if(updatedCartContent.length >= 3){
      const discountTotal = birdAmount * 0.9;
      setTotal(discountTotal + total);
    }
    else {
      setTotal(total + birdAmount);
      setDiscount(0);
    }
  }


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart birds = {birds} cartContent = {cartContent} removeBird = {removeBird} addToCart = {addToCart} total = {total} discount = {discount} applyDiscount = {applyDiscount}/>
        </aside>
        <Cards birds = {birds} addToCart = {addToCart}/>
      </main>
    </div>
  );
}

export default App;