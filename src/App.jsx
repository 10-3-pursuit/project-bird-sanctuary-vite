import { useState } from "react";
import birdData from "./data/birds"






function App() {
  const [birds, setBirds] = useState(birdData)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(cart.reduce((acc, curr) => acc + curr.amount,0))

  const addToCart = (bird) => {
    const isBirdInCart = cart.some(item => item.id === bird.id);

    if (!isBirdInCart) {
      setCart([...cart, bird])
      setAmount(prevAmount => prevAmount + bird.amount)
    } else {
      alert(`${bird.name} already chosen`)
    }
  }

  const remove = (bird) => {
    const filteredCart = cart.filter(item => item.id !== bird.id)
    setCart(filteredCart)
    setAmount(prevAmount => prevAmount - bird.amount)
  }


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
      </header>
      <main>
        <div>
          <Cart cart={cart} remove={remove} amount={amount}/>
          <Checkout />
        </div>
        <aside><Cards birds={birds} addToCart={addToCart}/></aside>
      </main>
    </div>
  );
}

export default App;
