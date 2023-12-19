import { useState } from "react"

export default function Checkout({resetCart}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("You have successfully adopted birds. Thank you!")
    resetCart();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    })
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <h5>First Name</h5>
          <input 
            onChange={handleChange}
            value= {formData.firstName}
            type="text" 
            name="firstName" 
            id="firstName"  
          />
        </label>
        <label htmlFor="lastName">
          <h5>Last Name</h5>
          <input 
            onChange={handleChange}
            value={formData.lastName}
            type="text" 
            name="lastName" 
            id="lastName" 
          />
        </label>
        <label htmlFor="email">
          <h5>Email</h5>
          <input
            onChange={handleChange}
            value={formData.email}
            type="text" 
            name="email" 
            id="email"
          />
        </label>
        <label htmlFor="zip">
          <h5>Zip</h5>
          <input 
            onChange={handleChange}
            value={formData.zip}
            type="text" 
            name="zip" 
            id="zip"  
          />
        </label>
        <div>
        <button className="submit-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};