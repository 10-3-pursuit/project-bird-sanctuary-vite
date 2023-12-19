import { useState } from "react";

const Checkout = ({ cart, setCart }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      alert("You have successfully adopted birds. Thank you!")
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        zip: ""
      });
      setCart([])
    } else
      alert('Please adopt a bird to checkout.')
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input
            onChange={handleChange}
            value={userInfo.firstName}
            id="firstName"
            type="text"
            required />
        </label> <br />
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={handleChange}
            value={userInfo.lastName}
            id="lastName"
            type="text"
            required />
        </label> <br />
        <label htmlFor="email">
          Email
          <input
            onChange={handleChange}
            value={userInfo.email}
            id="email"
            type="email"
            required />
        </label> <br />
        <label htmlFor="zip">
          Zip Code
          <input
            onChange={handleChange}
            value={userInfo.zip}
            id="zip"
            type="text"
            required />
        </label> <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
