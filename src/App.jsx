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
const [birdPrice, setBirdPrice] = useState(0);
// const[removeBird, setRemoveBird] = useState(0);

const addBird = (bird) => {
if (cartContent.find(({id}) => id === bird.id) ){
  alert(`Bird Already Chosen`);
} else {
  //taking cart contents spreading it out, and adding a bird
  setCartContent([...cartContent, bird]);
  setBirdPrice(birdPrice + bird.amount);
};
}

const removeBird = (id) => {
const updatedCartContent= cartContent.filter((bird) => bird.id !== id);
setCartContent(updatedCartContent)

//made a new variable to be able to deduct the price of the deleted bird
const deletedBird = cartContent.find((bird) => bird.id === id);
setBirdPrice(birdPrice - deletedBird.amount);
};


//  const newCartContent = cartContent.filter(({id}) => id === bird.id)
//   setCartContent(newCartContent); 



const birdDataList = birdData.map((bird) =>  (
  <tbody>
    <tr key={bird.id} onClick={() => addBird(bird)}>
      <td>
        {bird.img}
      </td>
      <td className="bird-name">
        <span>
          {bird.name}
        </span>

      </td>
      <td>${bird.amount.toFixed(2)}</td>
    </tr>

  </tbody>
));

const clearCart = () => {
  setCartContent([]);
}


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart cartContent= {cartContent}
          birdPrice= {birdPrice}
          removeBird={removeBird}
          
          
          />
          <Checkout clearCart= {clearCart}/>
        </aside>
        <Cards addBird= {addBird}/>

      </main>
    </div>
  );
  };

export default App;
