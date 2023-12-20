const Checkout = ({formData, setFormData, resetCart}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have successfully adopted birds. Thank you.")
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      zipcode: '',
    });

  resetCart()
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="bird-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstName">First Name: </label><br/>
          <input name="firstName" value={formData.firstName} onChange={handleChange}/>
        </p>
        <p>
          <label htmlFor="lastName">Last Name: </label><br/>
          <input name="lastName" value={formData.lastName} onChange={handleChange}/>
        </p>
        <p>
          <label htmlFor="email">email: </label><br/>
          <input name="email" value={formData.email} onChange={handleChange}/>
        </p>
        <p>
          <label htmlFor="zipcode">ZipCode: </label><br/>
          <input name="zipcode" value={formData.zipcode} onChange={handleChange}/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
    </div>
  );
};

export default Checkout;
