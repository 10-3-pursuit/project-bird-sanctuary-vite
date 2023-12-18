import React from "react";
import { useState } from "react";

//const [formData, setFormData] = useState()
const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
alert("You have successfully adopted birds. Thank you!")
//resetForm();
setFormData({
  firstName: "",
  lastName: "",
  email: "",
  zipcode: ""
});

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  zipCode: ""
})



  }


  
  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="first-name">First Name</label>
        <input  id="first-name" type="text"></input>
        <br></br>
        <label htmlFor="last-name">Last Name</label>
        <input  id="last-name" type="text"></input>
        <br></br>
        <label htmlFor="Email">Email</label>
        <input  id="email" type="text"></input>
        <br></br>

        <label htmlFor="zip-code">Zip Code</label>
        <input  id="zip-code" type="text"></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};




export default Checkout;


