import birdData from "./data/birds";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import bonusItems from "./data/bonusItems";

const birds = birdData;

function App() {
  const [cartContent, setCartContent] = useState([]);

  const [total, setTotal] = useState(0);

  const [bonus, setBonus] = useState([]);

  function checkForBonus(total) {
    const bonusList = [...bonusItems];

    if (total >= 100 && total < 300) {
      return bonusList.slice(0, 1);
    } else if (total >= 300 && total < 500) {
      return bonusList.slice(0, 2);
    } else if (total >= 500 && total < 1000) {
      return bonusList.slice(0, 3);
    } else if (total >= 1000) {
      return bonusList.slice(0, 4);
    }
    return [];
  }

  function addToCart(birdId) {
    const selectedBird = birds.find((bird) => bird.id === birdId);
    if (
      selectedBird &&
      !cartContent.some((bird) => bird.id === selectedBird.id)
    ) {
      const updatedCartContent = [...cartContent, selectedBird];
      setCartContent(updatedCartContent);
      const updatedTotal = total + selectedBird.amount;
      setTotal(updatedTotal);
      const calculatedBonus = checkForBonus(updatedTotal);
      setBonus(calculatedBonus);
    } else {
      alert("Bird Already Chosen. Try a Different Bird!");
    }
  }

  function removeBird(birdId) {
    const selectedBird = cartContent.find((bird) => bird.id === birdId);
    const filteredCart = cartContent.filter((bird) => bird.id !== birdId);
    setCartContent(filteredCart);
    const updatedTotal = total - selectedBird.amount;
    setTotal(updatedTotal);
    const calculatedBonus = checkForBonus(updatedTotal);
    setBonus(calculatedBonus);
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart
            cartContent={cartContent}
            total={total}
            removeBird={removeBird}
            checkForBonus={checkForBonus}
            bonus={bonus}
          />
          <Checkout
            setTotal={setTotal}
            setCartContent={setCartContent}
            setBonus={setBonus}
            cartContent={cartContent}
          />
        </aside>
        <Cards birds={birds} addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
