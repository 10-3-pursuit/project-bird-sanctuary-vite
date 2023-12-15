import {useState} from "react";
import birdsData from "./data/birds";
import bonusItems from "./data/bonusItems"
import { Header } from "./components/Header";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";

function App() {
const [birds, setBirds] = useState(birdsData);
const [cartItems, setCartItems] = useState([]);




  return (
    <div>
      <Header/>
      <main>
        <aside>
          <Cart 
            cartItems={cartItems} 
            addToCart = {addToCart}
          />
        </aside>
        <aside>
          <Cards 
            birds ={birds} 
            handleAdopt={handleAdopt} 
          />
        </aside>
        <section>
          <Checkout 
            resetCart={resetCart} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
