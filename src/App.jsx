import { useState } from "react";
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems"
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";

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

function handleRemoveBird(name){
  const updatedCart = cart.filter((bird)=>name !== bird.name)
  setCart(updatedCart)
}

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart cart={cart} handleRemoveBird={handleRemoveBird}/>
        </aside>
        <Cards birds={birdData} handleAddToCart={handleAddToCart}/>
      </main>
    </div>
  );
}

export default App;
