import { useState } from "react";
import birds from "./data/birds";
import bonusItems from "./data/bonusItems";
import Checkout from "./components/Checkout";
import "./App.css"

function App() {
  const [cart, setCart] = useState([]);
  const [hasDiscount, setHasDiscount] = useState(false);

  const clickAdopt = (bird) => {
    const currentIds = cart.map(bird => bird.id);
    if (!currentIds.includes(bird.id)) {
      if (cart.length === 2) {
        setHasDiscount(true);
      }
      setCart([...cart, bird]);
    } else {
      alert("You already added this bird to the cart.");
    }
  }

  const removeFromCart = (name) => {
    const oldLen = cart.length;
    const newCart = cart.filter(bird => bird.name !== name);
    const newLen = newCart.length;
    if (newLen === 2 && newLen < oldLen) {
      setHasDiscount(false);
    }
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const calculateCost = () => {
    let cost = cart.reduce((acc, curr) => acc + curr.amount, 0);
    if (hasDiscount) {
      // apply discount
      cost *= 0.90;
    }
    return cost;
  }

  const totalCost = calculateCost();

  const calculateDonations = () => {
    if (totalCost > 1000) {
      return bonusItems;
    } else if (totalCost >= 500) {
      return bonusItems.slice(0,3);
    } else if (totalCost >= 300) {
      return bonusItems.slice(0,2)
    } else if (totalCost >= 100) {
      return bonusItems.slice(0,1)
    }
    return [];
  }

  const donations= calculateDonations();

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <div className="container">
          <div className="cart">
            <h5>Discount: {hasDiscount ? 10 : 0}%</h5>
            <h4>Total Cost: ${totalCost}</h4>
            <ol>
              {cart.map(item => <li>
                {item.name} ${item.amount} <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </li>)}
            </ol>
            <h6>Your donations has qualified you for the following items:</h6>
            <ul>
                {donations.map(donation => <li>
                  {donation}
                </li>)}
            </ul>
          </div>
          <Checkout clearCart={clearCart} />
        </div>
        <div className="birds">
          {birds.map(bird => {
            return <div className="card">
              <h3>{bird.name}</h3>
              <img src={bird.img} alt={bird.name}></img>
              <h3>Price: ${bird.amount}</h3>
              <button onClick={() => clickAdopt(bird)}>Adopt</button>
            </div>
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
