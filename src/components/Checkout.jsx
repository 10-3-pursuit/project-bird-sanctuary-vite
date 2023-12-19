import { useState } from "react";

//CHECKOUT COMPONENT
const Checkout = ({resetCart}) => {
  // State to hold user details (first name, last name, email, zip code)
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  // Function to handle changes in input fields
  const handleTextChange = (event) => {
    // Update the corresponding field in the user details state using spread syntax
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

// Function to handle form submission
const handleSubmit = (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Display an alert indicating a successful adoption
  alert("You have successfully adopted birds. Thank you!");

  // Reset user details to empty values after submission
  setUserDetails({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  // Call the resetCart function passed as a prop to reset the cart
  resetCart();
};

  
  

return (
  <div className="checkout">
    <h2>Checkout Component</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <br />
        First Name:
        <br />
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleTextChange}
        />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <br />
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="zip">
          Zip code:
          <br />
          <input
            type="number"
            id="zip"
            name="zip"
            value={userDetails.zip}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Checkout;
