import { useState } from "react";

const Checkout = (props) => {

  const [inputValue, setInputValue] = useState({
    firstname:"",
    lastname: "",
    email: "",
    zipcode: ""
  })
  
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Congratulations ${inputValue.firstname}! You have successfully adopted birds. Thank you!`);
    reset();
  }

  function handleChange(event) {
    const updatedValue = {...inputValue, [event.target.id]: event.target.value};
    setInputValue(updatedValue);
  }

  function reset() {
    setInputValue({
      firstname:"",
      lastname: "",
      email: "",
      zipcode: ""
    })
    props.setCartContent([]);
    props.setBonus([]);
    props.setTotal(0);
  }
  
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input onChange={handleChange} value = {inputValue.firstname} id="firstname" name="firstname" type="text" />

        <label htmlFor="lastname">Last Name</label>
        <input onChange={handleChange} value={inputValue.lastname} id="lastname" name="lastname" type="text" />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} value={inputValue.email} id="email" name="email" type="email" />

        <label htmlFor="zipcode">Zip Code</label>
        <input onChange={handleChange} value={inputValue.zipcode} id="zipcode" name="zipcode" type="number" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
