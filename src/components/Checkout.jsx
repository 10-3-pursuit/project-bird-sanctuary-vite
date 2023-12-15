import { useState } from "react";

const Checkout = ({ clearCart }) => {
  const [userDetails, setUserDetails] = useState({
    firstName:"",
    lastName:"",
    email:"",
    zip:""
  });

  const reset = () => {
    // reset the form/state
    setUserDetails({
      firstName:"",
      lastName:"",
      email:"",
      zip:""
    })
  }

  const handleSubmit = () => {
    alert("You have successfully adopted birds. Thank you!");
    reset();
    clearCart();
  }

  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name:
          <input type="text" name="first-name" id="first-name" />
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input type="text" name="last-name" id="last-name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="zip">
          Zip code:
          <input type="number" name="zip" id="zip" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
