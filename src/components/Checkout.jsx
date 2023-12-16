import { useState } from "react";

const Checkout = () => {

const [userDetails, setUserDetails] = useState({
  firstName: '',
  lastName: '',
  email: "",
  zip: "",
});

const handleTextChange = (e) => {
  setUserDetails({
    ...userDetails,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert("You have successfully adopted birds. Thank you!");
  setUserDetails({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });
};

return (
    <div className="checkout">
      <h2>Checkout Component</h2>
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
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="zip">
          Zip code:
          <input
            type="number"
            id="zip"
            name="zip"
            value={userDetails.zip}
            onChange={handleTextChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
