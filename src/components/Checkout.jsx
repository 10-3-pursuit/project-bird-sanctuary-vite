import React from "react";
import { useState } from "react";

//const [formData, setFormData] = useState()
const Checkout = ({clearCart}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
alert("You have successfully adopted birds. Thank you!")
//resetForm();
setFormData({
  firstName: "",
  lastName: "",
  email: "",
  zipCode: ""
});
clearCart()
 }
function changeHandler(e) {
  setFormData({...formData, [e.target.name]:e.target.value});

  console.log(e.target.value)
} 

// function handleSubmit() {
//   e.preventDefault();
// };
  
  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <form onSubmit= {handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input  id="firstName" type="text"name="firstName" value={formData.firstName} onChange={changeHandler}/>
        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <input  id="lastName" type="text"name="lastName" value={formData.lastName} onChange={changeHandler}/>
        <br></br>
        <label htmlFor="email">Email</label>
        <input  id="email" type="text"name="email" value={formData.email} onChange={changeHandler}/>
        <br></br>

        <label htmlFor="zip-code">Zip Code</label>
        <input  id="zip-code" type="text"name="zipCode" value={formData.zipCode} onChange={changeHandler}/>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};




export default Checkout;


