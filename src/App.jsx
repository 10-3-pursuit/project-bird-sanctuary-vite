import {useState} from 'react'
// import birds from './data/birds'
import Header from "./components/Header";
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Cards from './components/Cards';


function App() {




  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart />
          <Checkout />
        </aside>
        <Cards />
      </main>
    </div>
  );
}

export default App;
