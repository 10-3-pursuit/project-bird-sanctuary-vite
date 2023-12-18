import { useState } from "react";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart"
import birdData from "./data/birds";

function App() {

  const[cart, setCart] = useState([])

  function addCart(birdId){
    const theBird = birdData.find((bird) => bird.id === birdId);
    if (cart.includes(theBird)) {
      alert("Bird already chosen.")
    } else {
      setCart([...cart, theBird]);
    }
  }

  function cartRemove(birdId){
    const removeBird = cart.find((bird) => bird.id === birdId);
    const keepBirds = cart.filter((bird) => bird.id !== birdId);
    setCart[keepBirds];
  }

  function reset(){

  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
         <Cards addCart={addCart}/>
        <aside>
          <Cart cart={cart} cartRemove={cartRemove}/>
          <Checkout />
        </aside>
      </main>
    </div>
  );
}

export default App;
