import {useState} from "react";
import birdsData from "./data/birds";
import bonusItems from "./data/bonusItems"
import { Header } from "./components/Header";
function App() {
const [birds, setBirds] = useState(birdsData);

  return (
    <div>
      <Header/>
      <main>
        <aside></aside>
      </main>
    </div>
  );
}

export default App;
