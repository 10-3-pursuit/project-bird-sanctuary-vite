import { useState } from 'react'
//import App from "../App.jsx"


/*---- N O T E ----
Should add conditional to check if cart is empty before submitting form
*/

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
            <label htmlFor="firstName"/>
            First Name:*<br></br>
            <input onChange={handleInputChange} value={formData.firstName} id="firstName" name="firstName" type="text" autoComplete="given-name" required/><br></br>
            <label htmlFor="lastName"/>
            Last Name:<br></br>
            <input onChange={handleInputChange} value={formData.lastName} id="lastName" name="lastName" type="text" autoComplete="family-name"/><br></br>
            <label htmlFor="email"/>
            E-mail:*<br></br>
            <input onChange={handleInputChange} value={formData.email} id="email" name="email" type="email" autoComplete="email" required/><br></br>
            <label htmlFor="zipCode"/>
            Zip Code:<br></br>
            <input onChange={handleInputChange} value={formData.zipCode} id="zipCode" name="zipCode" type="number" autoComplete="postal-code"/><br></br>
            <button type='submit'>Submit</button>
          </form>
      </section>
      )
    }
export default Checkout;