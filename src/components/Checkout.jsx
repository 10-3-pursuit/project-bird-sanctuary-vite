import { useState } from "react";


const Checkout = ({ resetCart }) => {

  const [newOrder, setNewOrder] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
  })

  function handleTextChange(event) {
    setNewOrder({ ...newOrder, [event.target.id]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    window.alert("You have successfully adopted birds. Thank you!")
    resetCart()
    setNewOrder({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
    })
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName" ></label>
      <input
        placeholder="First Name"
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleTextChange}
        value={newOrder.firstName}
        required 
      />
      <label htmlFor="lastName"></label>
      <input
        placeholder="Last Name"
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleTextChange}
        value={newOrder.lastName}
        required 
      />
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        type="email"
        id="email"
        name="email"
        onChange={handleTextChange}
        value={newOrder.email}
        required 
      />
      <label htmlFor="zip"></label>
      <input
        placeholder="Zip Code"
        type="text"
        id="zip"
        name="zip"
        onChange={handleTextChange}
        value={newOrder.zip}
        required 
      />
      <input type="submit" />
    </form>
    </div>
  );
};

export default Checkout;
