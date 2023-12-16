import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import { useState } from "react";

function App() {
  const [birdsData, setBirdsData] = useState(birdData);
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart birdsData={birdsData} />
          <Checkout />
        </aside>
        <Cards birdsData={birdsData} />
      </main>
    </div>
  );
}

export default App;
