import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: ""
  });

  function handleChange(event) {
    console.log(event.target.value)
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form action="">
        <label htmlFor="firstName">
          First Name
          <input
            onChange={handleChange}
            value={userInfo.firstName}
            id="firstName"
            type="text"
            required />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={handleChange}
            value={userInfo.lastName}
            id="lastName"
            type="text"
            required />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={handleChange}
            value={userInfo.email}
            id="email"
            type="email"
            required />
        </label>
        <label htmlFor="zip">
          Zip Code
          <input
            onChange={handleChange}
            value={userInfo.zip}
            id="zip"
            type="text"
            required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
