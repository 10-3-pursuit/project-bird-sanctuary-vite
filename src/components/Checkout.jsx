import React, { useState } from "react"

// Checkout component function
const Checkout = ({ onCheckout, onResetCart }) => {
  // State to manage form input data
  const [ infoData, setInfoData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    sipCode: ""
  });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update state with the latest input data
    setInfoData((lastData) => ({...lastData, [name]: value }));
};

// Function to handle form submission 
const handleSubmit = (e) => {
  e.preventDefault();

// Call the onCheckout function with the form data
onCheckout(infoData);

// Show a success alert
alert("You have successfully adopted birds. Thank you!");

// Call the onResetCart function to reset the cart
onResetCart();

 // Reset form input data
setInfoData({
  firstName: "",
  lastName: "",
  email: "",
  zipCode: ""
});
};
  // JSX for the Checkout component
  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <br />
          <input type="text" 
          name="firstName"
          value={infoData.firstName}
          onChange={handleInputChange}
          required
          />
          </label>
<br />
          <label>
          Last Name:
          <br />
          <input type="text" 
          name="lastName"
          value={infoData.lastName}
          onChange={handleInputChange}
          required
          />
          </label>
<br />
          <label>
          Email:
          <br />
          <input type="email" 
          name="email"
          value={infoData.email}
          onChange={handleInputChange}
          required
          />
          </label>
<br />
          <label>
          Zip Code:
          <br />
          <input type="number" 
          name="zipCode"
          value={infoData.zipCode}
          onChange={handleInputChange}
          required
          />
          </label>

          <button type="submit" className="checkout">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
