import { useState } from "react";
import birdData from "./data/birds.js";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {

const [cart, setCart] = useState([])

function handleAddToCart(bird){
  const duplicateBird = cart.find((cartItem) => bird.id === cartItem.id)
  if(duplicateBird){
    window.alert("Bird Already Chosen")
  } else {
    const newCartItem = {
      id: bird.id,
      name: bird.name,
      amount: bird.amount
    }
    setCart([...cart, newCartItem])
  }
}

function handleRemoveBird(bird){
  const updatedCart = cart.filter((item)=>bird.name !== item.name)
  setCart(updatedCart)
}

function resetCart(){
  setCart([])
}

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart 
          cart={cart}  
          handleRemoveBird={handleRemoveBird}
          />
          <Checkout resetCart={resetCart}/>
        </aside>
        <Cards 
        birds={birdData} 
        handleAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;
