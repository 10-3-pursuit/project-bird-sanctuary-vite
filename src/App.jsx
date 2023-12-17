import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { useState } from "react";

const birds = birdData;


function App() {

  const [cartContent, setCartContent] = useState([]);

  const [total, setTotal] = useState(0);

  const [discountedTotal, setDiscountedTotal] = useState();

  function addToCart(birdId){
    const selectedBird = birds.find((bird) => bird.id === birdId);
    if(selectedBird && !cartContent.some((bird) => bird.id === selectedBird.id)){
      const updatedCartContent = [...cartContent, selectedBird];
      setCartContent(updatedCartContent);
      const updatedTotal = total + selectedBird.amount;
      setTotal(updatedTotal);
    }
    else {
      alert('Bird Already Chosen. Try a Different Bird!')
    }
  }

  function removeBird(birdId) {
    const selectedBird = cartContent.find((bird) => (bird.id === birdId))
    const filteredCart = cartContent.filter((bird) => bird.id !== birdId);
    setCartContent(filteredCart);
    // console.log(selectedBird);
    const updatedTotal = total - selectedBird.amount;
    setTotal(updatedTotal);
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart birds = {birds} cartContent = {cartContent} total = {total} removeBird = {removeBird}/>
        </aside>
        < Cards birds = {birds} addToCart = {addToCart}/>
      </main>
    </div>
  );
}

export default App;
