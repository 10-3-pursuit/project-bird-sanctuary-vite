import { useState } from "react";

const Checkout = ({ handleCheckout }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.lastName || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }

  
    handleCheckout(formData);

    setFormData({
      name: "",
      lastName: "",
      email: "",
      zipCode: "",
    });

  
    alert('You have successfully adopted birds. Thank you!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="zipCode">Zip Code:</label>
        <br />
        <input
          id="zipCode"
          type="number"
          name="zipCode"  
          value={formData.zipCode}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
