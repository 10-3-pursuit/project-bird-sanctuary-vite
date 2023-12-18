import { useState } from "react";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Cart cart={cart} setCart={setCart} />
          <Checkout cartLength={cart.length} clearCart={clearCart} />
        </div>
        <Cards cart={cart} setCart={setCart} />
      </main>
    </div>
  );
}

export default App;
