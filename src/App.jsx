import { useState } from "react";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js"
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";


function App() {

  // const [menuOrder, setMenuOrder] = useState([]);
const [birdInfo, setBirdInfo] = useState([]);
const [bonusItem, setBonusItem] = useState([]);


// const addToOrder = (item) => {
//   setMenuOrder([...menuOrder, item]);
//   setMenuPrice(menuPrice + item.price);
//   };

// const newBird = (item) =>


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart>Checkout Cart</Cart>
        </aside>
        <Cards/>
      </main>
    </div>
  );
}

export default App;
