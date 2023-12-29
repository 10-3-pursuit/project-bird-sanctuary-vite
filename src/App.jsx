import { useState, useEffect } from "react";
import birdData from "./data/birds"
import bonusItems from "./data/bonusItems";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  //REACT States
  const [birds, setBirds] = useState(birdData);
  // set useState for total
  const [total, setTotal] = useState(0);    
  // set useState for list of adopted birds to be an empty array 
  const [adoptionList, setAdoptionList] = useState([]);
  // set useState for discount text 
  const [discount, SetDiscount] = useState("")
  // set useState for bonus to an empty array 
  const [bonus, setBonus] = useState([])

  const bird = birdData; 

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
    setAdoptionList([...adoptionList, findBird]);
    } else {
      alert("Bird Already Chosen");
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

  function HandleBonus(total) { 
    setBonus((bonus) => {

      let newBonus = []; 

      if(total >= 100 && total < 300) {
        // setBonus([...bonus, bonusItems[0]]);
        newBonus = [...bonusItems.slice(0, 1)];
      } else if (total >= 300 && total < 500) {
        // setBonus([...bonus, bonusItems[1]]);
        newBonus = [...bonusItems.slice(0, 2)];
      } else if (total >= 500 && total < 1000) {
        // setBonus([...bonus, bonusItems[2]]);
        newBonus = [...bonusItems.slice(0, 3)];
      } else {
        // setBonus([...bonus, bonusItems[3]]);
       newBonus = [...bonusItems];
      }
      return newBonus; 
    }); 
  }

  function HandleAdoptAndTotal(id) {
    const findBird = bird.find((birdie) => (birdie.id === id));
    const isBirdInAdoptionList = adoptionList.some((bird) => bird.id === id);
    const discountedTotal = Math.floor(total * 0.9);

    // setAdopt(true)
    if (!isBirdInAdoptionList) {
      setTotal(total + findBird.amount)
    } 
    
    if (adoptionList.length < 2) {
      SetDiscount(""); 
      HandleBonus(total + findBird.amount); 
    } else {  
      setTotal(discountedTotal + total); 
      SetDiscount("10%");
      HandleBonus(discountedTotal + total); 
    }

    AddBirdToCart(findBird); 
    // console.log(bonus); 
    // HandleBonus(discountedTotal) 
    
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
          <Cart total={total} adoptionList={adoptionList} RemoveBirdFromCart={RemoveBirdFromCart} discount={discount} bonus={bonus} />
          <Checkout /> 
        </aside>
      <Cards bird={bird} HandleAdoptAndTotal={HandleAdoptAndTotal}/> 
      </main>
    </div>
  );
}

export default App;
