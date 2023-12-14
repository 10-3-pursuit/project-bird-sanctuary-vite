import { useState } from "react";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
         <Cards />
        <aside>
          {/* Cart.jsx */}
          {/* Checkout.jsx */}
        </aside>
      </main>
    </div>
  );
}

export default App;
