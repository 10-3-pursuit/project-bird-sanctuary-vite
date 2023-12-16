import React, { useState } from 'react'; // Import useState
import birdData from './data/birds'; // Import bird data

// Step 1: import useStates
// Step 2: import Data
// Step 3: make Cards function to get data and render the information on the page
// Step 3a: put Cards fx as prop in App function in <main> tag
function Cards({ birdData, addToCartProp }) { // name of prop is addToCart
  return (
    <div>
      {birdData.map((bird) => (
        <div key={bird.id} className="card">
          <h3>{bird.name}</h3>
          <img src={bird.img} alt={bird.name} />
          <p>${bird.amount.toFixed(2)}</p>
          <button onClick={() => addToCartProp(bird)}>Adopt</button>
        </div>
      ))}
    </div>
  );
}

// Step 4: Make Cart component

/* in App function:
Step 4a: create handleRemoveFromCart
Step 5a: create variable to store totalCost and use as a (totalCostProp)
Step 5b: create variable to store discount rate to use as data for totalCostProp
Step 5c: create variable to store discountedTotal */

function Cart({ cartItems, removeFromCartProp, totalCostProp, discountRate }) {
// add removeBirdFromCart fx parameter, and parameters that are variables that hold totalCost and discountRate. All this variable stuff will be in App function and used inside this function
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.amount.toFixed(2)}
            <button onClick={() => removeFromCartProp(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <h4>Total Cost: ${totalCostProp.toFixed(2)}</h4>
      <h5>Discount: {discountRate}%</h5>
    </div>
  );
}
// Step 6: Create cart function
// Step 6a: 
function Checkout({resetCart}){ // prop is called resetCart (resetCart is gonna be fx that will reset the cart after clicking submit)
// make callback that handles submit
const handleSubmit = (event) => {
// prevent default for submit button
event.preventDefault();
alert ('You have successfully adopted birds. Thank you!');
resetCart(); // call back fx for resetting form
}
return (
  <div className='cart'>
    <h2>Check Out</h2>
  <form className='cart' onSubmit={Checkout}>
    <label>
      <input type="text">

      </input>
    </label>
    <button type='submit'>Submit</button>
  </form>
  </div>
  )
}

const resetCart = () => { // to use in Checkout fx (the form)
  setCartItems([]);
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (bird) => {
    if (cartItems.find(item => item.id === bird.id)) {
      alert('Bird Already Chosen');
      return;
    }
    setCartItems([...cartItems, bird]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(...cartItems.filter(item => item.id !== id));
  };

  // Steps 5a - 5c to add to handleCart
  const totalCostProp = cartItems.reduce((acc, item) => acc + item.amount, 0);
  const discountRate = cartItems.length >= 3 ? 10 : 0;
  const discountedTotal = discountRate ? totalCostProp * (1 - discountRate / 100) : totalCostProp; // discountedTotal will be the "data" passed onto totalCostProp

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
      <aside>
          <Cart
            cartItems={cartItems}
            removeFromCartProp={handleRemoveFromCart}
            totalCostProp={discountedTotal}
            discountRate={discountRate}
          />
        </aside>
        <Checkout resetCart={resetCart} />
        <Cards birdData={birdData} addToCartProp={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;