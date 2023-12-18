const Checkout = () => {

  const handleSubmit = () => {
    alert(`You have successfully adopted birds. Thank You!`)
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="f-name" id="f-name">First Name </label>
        <input type="text" required/>
        <br />
        <label htmlFor="l-name" id="l-name">Last Name </label>
        <input type="text" required/>
        <br />
        <label htmlFor="email" id="email">Email </label>
        <input type="text" required/>
        <br />
        <label htmlFor="zip" id="zip">Zip Code </label>
        <input type="number" required/>
        <br />
        <input type="submit" id="form-submit" />
      </form>
    </div>
  );
};

export default Checkout;
