import data from "./data/birds";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
// first to make sure my bird data is all set in my inspect through the console
// console.log(data);


function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  const addBirdToCart = (bird) => { 
    console.log('clicked', bird);
    const newBird = {
      id: bird.id,
      name: bird.name,
      amount: bird.amount,
      img: bird.img
    }
    setCart(prevCart => [newBird, ...prevCart]);
    const newTotal = cart.reduce((sum, item) => {
      return sum + item.amount
    }, newBird.amount);
    setTotal(newTotal)
  }

  const birdData = data.map(bird => {
    return <div key={bird.id} className="card"> 
      <h1>{bird.name}</h1>
      <p>{bird.amount}</p>
      <figure>
        <img src={bird.img} alt={bird.name} />
      </figure>
      <button onClick={() => addBirdToCart(bird)}>Adopt</button>
    </div>
  })

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart total={total} cart={cart}/>
          <Checkout/>
        </aside>
      
        <div className="bird-container">
        {birdData}
        </div>
        
      </main>
    </div>
  );
}

export default App;
