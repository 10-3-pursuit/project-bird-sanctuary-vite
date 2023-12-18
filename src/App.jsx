import React from "react";
import { useState } from "react";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart"
import BirdInfo from "./data/birds"


function App() {
  const [yourBirds, setYourBirds] = useState([]);
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  function addToCart(selectedBird) {
    const birdToAdd = BirdInfo.find((bird) => bird.name === selectedBird)

    if (yourBirds.find((bird) => bird.name === selectedBird)) {
      alert("Bird Already Chosen")
      return
    }

    let updatedYourBirds = []

    if (birdToAdd) {
      setTotal((prevTotal) => prevTotal + birdToAdd.amount)
      updatedYourBirds = [birdToAdd, ...yourBirds]
      setYourBirds(updatedYourBirds)
    }
  
    if (updatedYourBirds.length > 2) {
      setDiscount(10)
    }
  }

  function removeFromCart(singleBird) {
    const updatedCart = yourBirds.filter((bird) => bird.name !== singleBird)
    setYourBirds(updatedCart)
    
    const newTotal = updatedCart.reduce((total, bird) => total + bird.amount, 0)
    setTotal(newTotal)

    if (updatedCart.length < 3) {
      setDiscount(0)
    }
  }

  const resetCart = () => {
    setYourBirds([])
    setTotal(0)
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
          <Cart removeFromCart={removeFromCart} yourBirds={yourBirds} total={total} discount={discount}/>
          <Checkout resetCart={resetCart}/>
        </aside>
        <Cards addToCart={addToCart} BirdInfo={BirdInfo}/>
      </main>
    </div>
  );
}

export default App;
