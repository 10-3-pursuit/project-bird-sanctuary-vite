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
// Step 8a: make an onChange handler fx for form inputs (to use for onChange value in the input element)
// Step 8b: add onChange handler to input elements
const handleInputChange = (event) => {
  setFormData ({...formData, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
// prevent default for submit button (stops from resetting page bc that's the default)
event.preventDefault();
alert ('You have successfully adopted birds. Thank you! Woot!');
// Step 8b: created a reset for the form after creating useStates for the form inputs. This reset will trigger after clicking the submit form button.
setFormData({
  firstName: '',
  lastName: '',
  email: '',
  zipCode: ''
});
resetCart(); // call back fx for resetting form must be at end of function so it can work properly (the fx should be with the useStates inside App component so it can read the data)
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

// added autocomplete attribute since webpage was giving a warning about how it's missing the autocomplete
return (
  <section className='checkout'>
    <h2>Check Out</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleInputChange} value={formData.firstName} id="firstName" name="firstName" type="text" autoComplete="given-name"/>

        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleInputChange} value={formData.lastName} id="lastName" name="lastName" type="text" autoComplete="family-name"/>

        <label htmlFor="email">E-mail</label>
        <input onChange={handleInputChange} value={formData.email} id="email" name="email" type="email" autoComplete="email"/>

        <label htmlFor="zipCode">Zip Code</label>
        <input onChange={handleInputChange} value={formData.zipCode} id="zipCode" name="zipCode" type="number" autoComplete="postal-code"/>

        <button type='submit'>Submit</button>
      </form>
  </section>
  )
}



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
  // moved it into App component so it can have access to setCartItems
  /* ----- Notes: -----
  React, hooks like useState can only be used within the body of a function component, and their returned state and setter functions are only accessible within the same component where they're declared (or passed down as props to child components)*/
  const resetCart = () => { // to use in Checkout fx (the form)
    setCartItems([]); // might have to change this to an object Step 8 maybe it doesn't matter
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