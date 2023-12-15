import { useState } from "react";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js"
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";


function App() {


const [cartContent, setCartContent] = useState([]);
const [bonusItem, setBonusItem] = useState([]);
const [birdAmount, setBirdAmount] = useState(0);
const [birdPrice, setBirdPrice] = useState(0)

const addBird = (bird) => {
  setCartContent([...cartContent, bird]);
  setBirdPrice(birdPrice + bird.amount);
};

const birdDataList = birdData.map((bird) =>  (
  <tbody>
    <tr key={bird.id} onClick={() => addBird(bird)}>
      <td>
        {bird.image};
      </td>
      <td className="bird-name">
        <span>
          {bird.name};
        </span>

      </td>
      <td>${bird.amount.toFixed(3)}</td>
    </tr>

  </tbody>
));



  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart/>
          <Checkout/>
        </aside>
        <Cards addBird= {addBird}/>

      </main>
    </div>
  );
}

export default App;
