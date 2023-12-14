import birddata from "./data/birds.js"
import { useState } from "react";

//CARD COMPONENT SECTION//
function Cards(props) {
// USED DATA
    const { birds } = props;
// DISPLAYED NAME,IMAGE,PRICE
    return (
      <>
        {birds.map((bird, index) => (
          // ASSIGNED CLASS NAME "CARD"
          <div key={index} className="card">
            <h2>{bird.name}</h2>
            <img src={bird.img} alt={bird.name} />
            <p>Price: ${bird.amount}</p>
            {/* ADDED ADOPT BUTTON */}
            <button>Adopt</button>
          </div>
        ))}
      </>
    );
  }

// CART COMPONENT SECTION //
  function App(props) {
    const { birds } = props
    // CART ITEMS
    const [cartItems, setCartItems] =  useState([]);
    //TOTAL
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    //DISCOUNTS
    const [discountTotal, setdiscountTotal] = useState(0);

  //HANDLE TO ADD TO CART FUNCTION
  const handleAddToCart = (bird) => {
    const birdChosen = cartItems.some((item) => item.name === bird.name);

    if (birdChosen) {
      alert('Bird Already Chosen');
    } else {
      const updatedCart = [...cartItems, bird];
      setCartItems(updatedCart);
      updateTotalAndDiscount(updatedCart);
    }
  };
  // HANDLE TO REMOVE FROM CART FUNCTION

  const handleRemoveFromCart = (bird) => {
    const updatedCart = cartItems.filter((item) => item.name !== bird.name);
    setCartItems(updatedCart);
    updateTotalAndDiscount(updatedCart)
  }


  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
      
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
      <Cards birds={birddata} />
        <aside></aside>
      </main>
    </div>
  );
}

export default App;
