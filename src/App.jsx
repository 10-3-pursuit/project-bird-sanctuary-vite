import { useState } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";


function App() {

  const [ birds, setBirds ] = useState(birdData)
  const [ ] = useState()
  const bird = birdData; 
  
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          {/* need to properly link up css classes later */}
          <Cards bird={bird}/>
        </aside>
      </main>
    </div>
  );
}

export default App;
