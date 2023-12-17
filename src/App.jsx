import React, { useState } from 'react'; // Import useState
import birdData from './data/birds'; // Import bird data
import bonusItems from './data/bonusItems';

// Step 1: import useStates
// Step 2: import Data
// Step 3: make Cards function to get data and render the information on the page
// Step 3a: put Cards fx as prop in App function in <main> tag
function Cards ({ birdData, addToCartProp }) { // name of prop is addToCart
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

function Cart ({ cartItems, removeFromCartProp, totalCostProp, discountRateProp, bonusItems }) {
// add removeFromCartProp fx parameter, and parameters that are variables that hold totalCost and discountRate. All this variable stuff will be in App function and used inside this function
// Step 7: Added bonusItems to be used as prop on App.jsx, but before using it as a prop create conditional (wrap it as a function)
// Step 7a: create callback fx to generate bonus items 
const getBonusItemsToDisplay = () => {
  // making it a switch statement will probably make code longer bc gotta create statements that will be true for each case to put inside switch ()
  if (totalCostProp > 1000) {
    return bonusItems;
  } else if (totalCostProp >= 500) {
    return bonusItems.slice(0, 3);
  } else if (totalCostProp >= 300) {
    return bonusItems.slice(0, 2);
  } else if (totalCostProp >= 100) {
    return [bonusItems[0]];
  } else {
    return [];
  }
};
// Determine the bonus items to display (created this variabe so output can be used to iterate through in .map fx in the return (to append and update on page))
const displayedBonusItems = getBonusItemsToDisplay();
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
      {displayedBonusItems.length > 0 && (
        <div>
          <h3>Bonus Items</h3>
          <ul className="bonuses">
            {displayedBonusItems.map((bonus, index) => (
              <li key={index}>{bonus}</li>
            ))}
          </ul>
        </div>
        )}
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
// Step 8: Create Use states for form since that needs to be tracked / updated
/* ----- Notes: -----
You can use seperate states for each input element as well but one sisngle usestate that is an object is cleaner*/
// Step 8a: Create handle input change function to put as onChange in input
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  zipCode: ''
});
// Step 8a: make an onChange handler fx for form inputs (to use for onChange value in the input element)
const handleInputChange = (event) => {
  setFormData ({...formData, [event.target.name]: event.target.value})
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
            bonusItems={bonusItems} // don't forget to add prop!!
          />
        <Checkout resetCart={resetCart} />
        </aside>
        <Cards birdData={birdData} addToCartProp={handleAddToCart} />
      </main>
    </>
  );
}

export default App;