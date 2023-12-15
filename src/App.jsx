import { useState } from "react";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import "./App.css"

function App() {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <div className="container">
          <Cart cart={cart} setCart={setCart} />
          <Checkout clearCart={clearCart} />
        </div>
        <Cards setCart={setCart}/>
      </main>
    </div>
  );
}

export default App;
