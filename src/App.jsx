import { useState } from "react";
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems"
import Header from "./components/Header.jsx";


function App() {

  const [birds, setbirds] = useState(birdData)

  return (
    <div>
      <Header />
      <main>
        <aside className="birdCardList" >
          {birds.map((bird)=>(
            <div key={bird.id} className="card ">
              <span>{bird.name}</span>
              <img src={bird.img} alt={bird.name} />
              <span>{bird.amount}</span>
              <button>Adopt</button>
            </div>
            ))}
        </aside>

      </main>
    </div>
  );
}

export default App;
