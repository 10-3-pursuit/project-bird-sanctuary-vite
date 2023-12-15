import { useState } from "react";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import "./App.css"

function App() {
  const [cart, setCart] = useState([]);
  const hasDiscount = cart.length > 2;

  const clearCart = () => {
    setCart([]);
  }

  const calculateCost = (hasDiscount) => {
    let cost = cart.reduce((acc, curr) => acc + curr.amount, 0);
    if (hasDiscount) {
      // apply discount
      cost *= 0.90;
    }
    return cost;
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <div className="container">
          <Cart cart={cart} setCart={setCart} calculateCost={calculateCost} hasDiscount={hasDiscount} />
          <Checkout clearCart={clearCart} />
        </div>
        <Cards cart={cart} setCart={setCart}/>
      </main>
    </div>
  );
}

export default App;
