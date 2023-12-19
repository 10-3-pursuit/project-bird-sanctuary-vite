import { useState } from "react";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart"
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems"

function App() {

  const[cart, setCart] = useState([])
  const[total, setTotal] = useState(0)
  const[discount, setDiscount] = useState(false)
  const[bonus, setBonus] = useState([])

  function addCart(birdId){
    const theBird = birdData.find((bird) => bird.id === birdId);
    if (cart.includes(theBird)) {
      alert("Bird already chosen.")
    } else {
      const updatedCart = [...cart, theBird];
      setCart(updatedCart);
      totalCart(updatedCart);
    }
  }

  function cartRemove(birdId){
    const keepBirds = cart.filter((bird) => bird.id !== birdId);
    setCart(keepBirds);
    totalCart(keepBirds);
  }

  function totalCart(updatedCart){
   const newTotal = updatedCart.reduce((total, bird) => total + bird.amount, 0);
   if (updatedCart.length >= 3) {
    setDiscount(true);
    setTotal(newTotal * 0.9);
    bonusGoodies(newTotal);
  } else {
    setDiscount(false);
    setTotal(newTotal);
    bonusGoodies(newTotal);
   };
  }

  function bonusGoodies(bonusTotal){
    if (bonusTotal >= 100 && bonusTotal <= 300) {
      setBonus(bonusItems.slice(0,1));
    } else if (bonusTotal > 300 && bonusTotal <= 500 ) {
      setBonus(bonusItems.slice(0,2));
    } else if (bonusTotal > 500 && bonusTotal <= 1000) {
      setBonus(bonusItems.slice(0,3));
    } else if (bonusTotal > 1000) {
      setBonus(bonusItems);
    } else if (bonusTotal < 100) {
      setBonus([]);
    }
  }
  
  function reset(){
    setCart([]);
    setTotal(0);
    setBonus([]);
    setDiscount(false);
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
          <Cart cart={cart} cartRemove={cartRemove} total={total} discount={discount} bonus={bonus} />
          <Checkout reset={reset} />
        </aside>
      </main>
    </div>
  );
}

export default App;
