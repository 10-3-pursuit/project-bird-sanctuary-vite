import { useState } from 'react'; // Import useState
import birdData from './data/birds'; // Import bird data
import bonusItems from './data/bonusItems';
import Cards from "./components/Cards.jsx"
import Cart from "./components/Cart.jsx"
import Checkout from './components/Checkout.jsx';
import './index.css'
import './App.css'

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
  };// moved it into App component so it can have access to setCartItems
  
  /* ----- Notes: -----
  React, hooks like useState can only be used within the body of a function component, and their returned state and setter functions are only accessible within the same component where they're declared (or passed down as props to child components)*/
  const resetCart = () => { // to use in Checkout fx (the form)
    setCartItems([]);
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

/* ----- B U I L D I N G   T H I S   A P P -----
Step 1: import useStates
Step 2: import Data
Step 3: make Cards function to get data and render the information on the page
Step 3a: put Cards fx as prop in App function in <main> tag
Step 4: Make Cart component

            ---- in the App function: ----
Step 4a: create handleRemoveFromCart

Step 5a: create variable to store totalCost and use as a (totalCostProp)

Step 5b: create variable to store discount rate to use as data for totalCostProp

Step 5c: create variable to store discountedTotal

Step 6: Create Checkout function handlesubmit fx must be created inside this one so that we can then put Checkout fx on <form onSubmit={Checkout}> element in jsx return. resetCart(); callback must be added right before return so form clears upon submission

Step 6a: Usestates for this function must be created so input gets tracked

Step 6b: add removeFromCartProp fx parameter, and parameters that are variables that hold totalCost and discountRate. All this variable stuff will be in App function and used inside this function

Step 7: Added bonusItems to be used as prop on App.jsx, but before using it as a prop create conditional (wrap it as a function)

Step 7a: create callback fx to generate bonus items 
 prop is called resetCart (resetCart is gonna be fx that will reset the cart after clicking submit)
 make callback that handles submit

Step 8: Create Use states for form since that needs to be tracked / updated
Step 8a: Create handle input change function to put as onChange in input
Step 8b: make an onChange handler fx for form inputs (to use for onChange value in the input element)
 
Step 8c: add onChange handler to input elements

              ----- Notes: -----
You can use seperate states for each input element as well but one single useState that is an object is cleaner
added autocomplete attribute since webpage was giving a warning about how it's missing the autocomplete

call back fx for resetting form must be at end of function so it can work properly (the fx should be with the useStates inside App component so it can read the data)
*/