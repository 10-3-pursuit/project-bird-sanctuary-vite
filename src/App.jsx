import React from "react";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";

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
        <Cards/>
      </main>
    </div>
  );
}

export default App;
