import { useState } from 'react';
import Cards from './components/Cards'
import Cart from './components/Cart'
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart cart={cart} setCart={setCart} />
          <Checkout cart={cart} setCart={setCart} />
        </aside>
        <Cards cart={cart} setCart={setCart} />
      </main>
    </div>
  );
}

export default App;
