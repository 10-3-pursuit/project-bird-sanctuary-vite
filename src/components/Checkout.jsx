import React, { useState } from "react";

const Checkout = () => {
  // State and functions for handling form inputs and submission

  // State for the donator's information input (form)
  const [donatorsInfo, setDonatorsInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    // Update the specific input's value in the donatorsInfo state
    // [e.target.name]: e.target.value => this is so that the page knows what to update
    setDonatorsInfo({ ...donatorsInfo, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset the form after submission by clearing the state
    setDonatorsInfo({
      firstName: "",
      lastName: "",
      email: "",
      zipcode: "",
    });

    // Show an alert upon successful submission
    alert("You have successfully adopted birds. Thank you!");

    // Reset cart and perform additional actions
    resetCart();
  };

  // Function to reset the cart or perform additional actions
  const resetCart = () => {
    // For demonstration purposes log a message
    // console.log("Cart has been reset.");
  };

  return (
    <div className="checkout">
      {/* Displaying a checkout form for collecting donor's information */}

      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* First name */}
        <label htmlFor="firstName">First name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          value={donatorsInfo.firstName} // Set the input value from state
        />
        <br />
        <br />
        {/* Last name */}
        <label htmlFor="lastName">Last name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          value={donatorsInfo.lastName} // Set the input value from state
        />
        <br />
        <br />
        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          value={donatorsInfo.email} // Set the input value from state
        />
        <br />
        <br />
        {/* Zip code */}
        <label htmlFor="zipcode">Zip Code:</label>
        <input
          onChange={handleChange}
          type="text"
          id="zipcode"
          name="zipcode"
          pattern="[0-9]{5}"
          title="Please enter a 5-digit ZIP code"
          value={donatorsInfo.zipcode} // Set the input value from state
        />
        <br />
        <br />
        {/* Submit button */}
        <input className="rainbow-button" type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
};

export default Checkout;
