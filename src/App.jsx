import React, { useState } from 'react'; // Import useState
import birdData from './data/birds'; // Import bird data

// Step 1: import useStates
// Step 2: import Data
// Step 3: make Cards function to get data and render the information on the page
// Step 3a: put Cards fx as prop in App function in <main> tag
function Cards({ birdData, addToCartProp }) { // name of prop is addToCart
  return (
    <section>
      {birdData.map((bird) => (
        <div key={bird.id} className="card">
          <h3>{bird.name}</h3>
          <img src={bird.img} alt={bird.name} />
          <p>${bird.amount.toFixed(2)}</p>
          <button onClick={() => addToCartProp(bird)}>Adopt</button>
        </div>
      ))}
    </section>
  );
}

// Step 4: Make Cart component

/* in App function:
Step 4a: create handleRemoveFromCart
Step 5a: create variable to store totalCost and use as a (totalCostProp)
Step 5b: create variable to store discount rate to use as data for totalCostProp
Step 5c: create variable to store discountedTotal */

function Cart({ cartItems, removeFromCartProp, totalCostProp, discountRateProp }) {
// add removeBirdFromCart fx parameter, and parameters that are variables that hold totalCost and discountRate. All this variable stuff will be in App function and used inside this function
  return (
    <section className="cart">
      <h2>Cart</h2>
      <h5>Discount: {discountRateProp}%</h5>
      <h4>Total Cost: ${totalCostProp.toFixed(2)}</h4>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.amount.toFixed(2)}
            <button onClick={() => removeFromCartProp(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </section>
  );
}
// Step 6: Create Checkout function handlesubmit fx must be created inside this one so that we can then put Checkout fx on <form onSubmit={Checkout}> element in jsx return. resetCart(); callback must be added right before return so form clears upon submission
// Step 6a: Usestates for this function must be created so input gets tracked
function Checkout({resetCart}){ // prop is called resetCart (resetCart is gonna be fx that will reset the cart after clicking submit)
// make callback that handles submit
const handleSubmit = (event) => {
// prevent default for submit button
event.preventDefault();
alert ('You have successfully adopted birds. Thank you!');
resetCart(); // call back fx for resetting form
}
return (
  <section className='checkout'>
    <h2>Check Out</h2>
  <form onSubmit={handleSubmit}>
      <label htmlFor="First-Name"/>
      First Name
      <input id="First-Name" type="text"/>
      <label htmlFor="Last-Name"/>
      Last Name
      <input id="Last-Name" type="text"/>
      <label htmlFor="Last-Name"/>
      E-mail
      <input id="Last-Name" type="email"/>
      Zip Code
      <input id="Last-Name" type="number"/>
    <button type='submit'>Submit</button>
  </form>
  </section>
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
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Steps 5a - 5c to add to handleCart
  const totalCostProp = cartItems.reduce((acc, item) => acc + item.amount, 0);
  const discountRateProp = cartItems.length >= 3 ? 10 : 0;
  const discountedTotal = discountRateProp ? totalCostProp * (1 - discountRateProp / 100) : totalCostProp; // discountedTotal will be the "data" passed onto totalCostProp

  return (
    <>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
      <aside>
          <Cart
            removeFromCartProp={handleRemoveFromCart}
            totalCostProp={discountedTotal}
            discountRateProp={discountRateProp}
            cartItems={cartItems}
          />
        <Checkout resetCart={resetCart} />
        </aside>
        <Cards birdData={birdData} addToCartProp={handleAddToCart} />
      </main>
    </>
  );
}

export default App;