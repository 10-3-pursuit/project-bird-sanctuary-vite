import { useState } from "react";

const Checkout = ({setCartItems, setTotal, setDiscount}) => {
  const [form, setForm] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      zip: ''
    }
  )

  const reset = () => {
    setTotal(0)
    setDiscount(0)
    setCartItems([])
    setForm(
      {
        firstName: '',
        lastName: '',
        email: '',
        zip: ''
      }
    )
  }

  const handleTextChange = (e) => {
    setForm(
      {
      ...form, [e.target.id]: e.target.value       
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`You have adopted birds. Thank you ${form.firstName}`)
    reset()
  }

  return (
    <div className="checkout">
      <form action="submit">
        <h2>Checkout</h2>
        <label htmlFor="firstName">
          First Name
          <input onChange={handleTextChange} value={form.firstName} type="text" name='firstName' id='firstName' />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input onChange={handleTextChange} value={form.lastName} type="text" name='lastName' id='lastName'/>
        </label>
        <label htmlFor="email">
          Email
          <input onChange={handleTextChange} value={form.email} type="email" name='email' id='email'/>
        </label>
        <label htmlFor="zip">
          Zip Code
          <input onChange={handleTextChange} value={form.zip} type="text" name='zip' id='zip'/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
