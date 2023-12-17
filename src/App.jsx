import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import birds from "./data/birds"


function App() {
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Checkout />
        </aside>
        <Cards birds={birds}/>
      </main>
    </div>
  );
}

export default App;
