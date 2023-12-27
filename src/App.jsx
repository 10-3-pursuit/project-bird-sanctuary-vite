import { useState, useEffect } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import bonusItems from "./data/bonusItems";

function App() {
  //REACT States
  const [birds, setBirds] = useState(birdData);
  // set useState for total
  const [total, setTotal] = useState(0);    
  // set useState for list of adopted birds to be an empty array 
  const [adoptionList, setAdoptionList] = useState([]);

  const [discount, SetDiscount] = useState("")

  const bird = birdData; 
  const bonus = bonusItems; 

  //realtime dev log of adoptionList
  useEffect(() => {
    console.log(adoptionList);
  }, [adoptionList]);
  //realtime dev log of total 
  useEffect(() => {
    console.log({ total });
  }, [total]);
  
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

    if (newAdoptionList.length < 3) {
      SetDiscount(""); 
    }

  }

  function HandleAdoptAndTotal(id) {
    const findBird = bird.find((birdie) => (birdie.id === id));
    const isBirdInAdoptionList = adoptionList.some((bird) => bird.id === id);

    // setAdopt(true)
    if (!isBirdInAdoptionList) {
      setTotal(total + findBird.amount)
    } 
    
    if (adoptionList.length < 2) {
      SetDiscount(""); 
    } else { 
      const discountedTotal = Math.floor(total * 0.9) 
      setTotal(discountedTotal + total); 
      SetDiscount("10%")
    }

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
          <Cart total={total} adoptionList={adoptionList} RemoveBirdFromCart={RemoveBirdFromCart} discount={discount}/>
        </aside>
      <Cards bird={bird} HandleAdoptAndTotal={HandleAdoptAndTotal}/> 
      </main>
    </div>
  );
}

export default App;
