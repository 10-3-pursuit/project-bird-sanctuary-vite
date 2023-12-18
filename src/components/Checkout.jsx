import { useState } from "react";

const Checkout = ({ setCartItems, CartItems }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipcode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field "${name}" changed to:`, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetCart = () => {
    setCartItems([]);
    // Reset other cart-related state if needed (total cost, discounts)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // to handle form submission
    // Reset the cart when a successful submission
    alert('You have successfully adopted birds. Thank you!');
    resetCart(); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      zipcode: '',
    });
  };



  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label><br />
        <label>
          Last Name: <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label><br />
        <label>
          Email: <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label><br />
        <label>
          Zip Code: <br />
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </label><br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Checkout;
