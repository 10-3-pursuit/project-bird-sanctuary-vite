import birdData from "./data/birds";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <Cards birdData={birdData} />
        <aside>
          <Cart birdData={birdData} />
          <Checkout birdData={birdData} />
        </aside>
      </main>
    </div>
  );
}

export default App;
