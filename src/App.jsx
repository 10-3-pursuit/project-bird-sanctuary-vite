import Header from "./Header";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import { useState } from "react";
import bonusData from "./data/bonusItems";
import "./index.css";

function App() {
  // state for the items added to the cart
  // State to manage items in the cart
  const [cartList, setCartList] = useState([]);

  // is this where we create a fx to add a bird to the cart when the ADOPT button is clicked?
  // pass in the bird object
  // function to add a bird to the cart
  const addToCart = (bird) => {
    // Check if the bird is already in the cart
    const isBirdInCart = cartList.some((item) => item.id === bird.id);

    // If the bird is already in the cart, show an alert and stop the execution
    if (isBirdInCart) {
      alert("Bird Already Chosen");
      return;
    }

    // Create a new bird object and update the cartList state
    const newBirdObj = {
      name: bird.name,
      amount: bird.amount,
      id: bird.id,
    };
    // Update the cartlist state by adding the newBirdObj to the existing list
    setCartList([...cartList, newBirdObj]);
  };

  // Function to handle deletion of a bird from the cart
  const handleDelete = (id) => {
    const deleteBird = cartList.filter((birdItem) => birdItem.id !== id);
    // update the state
    setCartList(deleteBird);
  };

  return (
    <div>
      {/* Render Header, Cart, Checkout, and Cards components */}
      <Header />
      <main>
        <aside>
          <Cart
            handleDelete={handleDelete}
            cartList={cartList}
            birdsData={birdData}
            bonusData={bonusData}
          />
          <Checkout />
        </aside>
        <Cards addToCart={addToCart} birdsData={birdData} />
      </main>
    </div>
  );
}

export default App;
