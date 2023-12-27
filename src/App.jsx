import { useState } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import bonusItems from "./data/bonusItems";

function App() {
  //REACT States
  const [birds, setBirds] = useState(birdData);
  //set useState for adopt button to false, onclick will turn true 
  const [adopt, setAdopt] = useState(false);
  // set useState for total
  const [total, setTotal] = useState(0);    
  // set useState for list of adopted birds to be an empty array 
  const [adoptionList, setAdoptionList] = useState([]);

  const bird = birdData; 
  const bonus = bonusItems; 
  
  function AddBirdToCart(findBird) {
    const isBirdInCart = adoptionList.some((bird) => bird.id === findBird.id); 
    if (!isBirdInCart){
    setAdoptionList([...adoptionList, findBird])
    } else {
      alert("Bird Already Chosen")
    }
  }

  function RemoveBirdFromCart(birdie) {
    const newAdoptionList = adoptionList.filter((birdy) => birdy.id !== birdie.id); 
    setAdoptionList(newAdoptionList);

    const newTotal = newAdoptionList.reduce((acc, bird) => acc + bird.amount, 0); 
    setTotal(newTotal); 
  }

  function HandleAdoptAndTotal(id) {
    const findBird = bird.find((birdie) => (birdie.id === id));
    const isBirdInAdoptionList = adoptionList.some((bird) => bird.id === id);
    setAdopt(true)
    console.log("You clicked the adopt button!");
    console.log(`The current useState of adopt is ${adopt}`);
    console.log(id);
    console.log(`This bird costs $${findBird.amount}`); 
    
    if (!isBirdInAdoptionList) {
      setTotal(total + findBird.amount)
    } 
    
    console.log({total})
    // setAdoptionList([...adoptionList, ...findBird]); 
    console.log(adoptionList)
    AddBirdToCart(findBird); 
    
  }
  
  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          {/* need to properly link up css classes later */}
          {/* bonus={bonus} adopt={adopt} */}
          {/* findBird={findBird} id={id} */}
          <Cart total={total} adoptionList={adoptionList} RemoveBirdFromCart={RemoveBirdFromCart}/>
        </aside>
      <Cards bird={bird} HandleAdoptAndTotal={HandleAdoptAndTotal}/> 
      </main>
    </div>
  );
}

export default App;
