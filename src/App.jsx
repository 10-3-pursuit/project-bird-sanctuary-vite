
import { useState } from 'react';
import birdData from './data/birds'; // Import your bird data

function Cards({ birdData, onAddToCart }) {
  return (
    <div>
      {birdData.map((bird) => (
        <div key={bird.id} className="card">
          <h3>{bird.name}</h3> {/* Bird name */}
          <img src={bird.img} alt={bird.name} /> {/* Bird image */}
          <p>${bird.amount.toFixed(2)}</p> {/* Bird price */}
          <button onClick={() => onAddToCart(bird)}>Adopt</button> {/* Adopt button */}
        </div>
      ))}
    </div>
  );
}

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item, index) => (
        <p key={index}>{item.name} - ${item.amount.toFixed(2)}</p>
      ))}
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]); // useState for cart items

  const handleAddToCart = (bird) => {
    setCartItems([...cartItems, bird]); // Add bird to cart - not sure why it works did it in other hw
  };

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <Cards birdData={birdData} onAddToCart={handleAddToCart} />
        <aside>
          <Cart cartItems={cartItems} />
        </aside>
      </main>
    </div>
  );
}

export default App;
