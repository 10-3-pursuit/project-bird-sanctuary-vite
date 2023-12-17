import { useState } from "react";
// CHECKOUT COMPONENT
const Checkout = () => {
  // STATE TO MANAGE USER DETAILS (name, email, zip)
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: "",
    zip: "",
  });

  // FUNCTION TO HANDLE INPUTS
  const handleTextChange = (event) => {
    // UPDATE THE USER DETAILS WITH THE STATE.
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display an alert to the user indicating successful bird adoption
    alert("You have successfully adopted birds. Thank you!");

    // Reset user details to empty values after submission
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };

  // RENDER COMPONENT
  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      {/* Form for user details with input fields */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleTextChange}
          />
        </label>
        {/* Similar input fields for Last Name, Email, and Zip Code */}
        {/* ... (omitted for brevity) */}
        {/* Button to submit the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the 'Checkout' component for use in other parts of the application
export default Checkout;
