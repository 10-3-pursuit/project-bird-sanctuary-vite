import { useState } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import bonusItems from "./data/bonusItems";

function App() {

  const [ birds, setBirds ] = useState(birdData)
  const [ ] = useState()
  const bird = birdData; 
  const bonus = bonusItems; 
  
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          {/* need to properly link up css classes later */}
          <Cart bonus={bonus}/>
        </aside>
      <Cards bird={bird}/> 
      </main>
    </div>
  );
}

export default App;
