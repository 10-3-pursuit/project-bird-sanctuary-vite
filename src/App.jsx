import { useState } from "react";
import birdData from "./data/birds"






function App() {
  const [birds, setBirds] = useState(birdData)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(cart.reduce((acc, curr) => acc + curr.amount,0))


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
      </header>
      <main>
        <aside></aside>
      </main>
    </div>
  );
}

export default App;
