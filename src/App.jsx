// import { useState } from "react";
// import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems"
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";

function App() {

  // const [birds, setbirds] = useState(...birdData)

  return (
    <div>
      <Header />
      <main>
        <aside>
        <Cards />
        </aside>

      </main>
    </div>
  );
}

export default App;
