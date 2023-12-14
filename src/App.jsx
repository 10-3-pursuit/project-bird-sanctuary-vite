// import { useState } from "react";
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems"
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";

function App() {



  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart />
        </aside>
        <Cards birds={birdData}/>
      </main>
    </div>
  );
}

export default App;
