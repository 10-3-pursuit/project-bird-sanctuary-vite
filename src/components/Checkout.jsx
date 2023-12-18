import { useState } from "react";

const Checkout = (props) => {
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    zipcode: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (props.cartContent.length > 0) {
      alert(
        `Congratulations ${inputValue.firstname}! You have successfully adopted birds. Thank you!`
      );
    } else {
      alert(`You must adopt a bird in order to checkout!`);
    }
    reset();
  }

  function handleChange(event) {
    const updatedValue = {
      ...inputValue,
      [event.target.id]: event.target.value,
    };
    setInputValue(updatedValue);
  }

  function reset() {
    setInputValue({
      firstname: "",
      lastname: "",
      email: "",
      zipcode: "",
    });
    props.setCartContent([]);
    props.setBonus([]);
    props.setTotal(0);
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="label-input">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={handleChange}
              value={inputValue.firstname}
              id="firstname"
              name="firstname"
              type="text"
              required="required"
            />
          </div>

          <div className="label-input">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={handleChange}
              value={inputValue.lastname}
              id="lastname"
              name="lastname"
              type="text"
              required="required"
            />
          </div>

          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={inputValue.email}
              id="email"
              name="email"
              type="email"
              required="required"
            />
          </div>

          <div className="label-input">
            <label htmlFor="zipcode">Zip Code</label>
            <input
              onChange={handleChange}
              value={inputValue.zipcode}
              id="zipcode"
              name="zipcode"
              type="number"
              required="required"
            />
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
