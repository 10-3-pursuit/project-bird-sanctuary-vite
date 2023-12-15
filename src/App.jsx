import { useState } from "react";
import birdData from "./data/birds.js";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";

function App() {

const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)

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
    setTotal((prevTotal) => prevTotal + newCartItem.amount)
  }
}

function handleRemoveBird(bird){
  const updatedCart = cart.filter((item)=>bird.name !== item.name)
  setCart(updatedCart)
  setTotal((prevTotal) => prevTotal - bird.amount)
}

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart 
          cart={cart}  
          total={total}
          handleRemoveBird={handleRemoveBird}
          />
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
