const Checkout = () => {
  function handleChange(event) {
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form action="">
        <label htmlFor="firstName">
          First Name
          <input
            onChange={handleChange}
            type="text"
            required />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={handleChange}
            type="text"
            required />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={handleChange}
            type="email"
            required />
        </label>
        <label htmlFor="zip">
          Zip Code
          <input
            onChange={handleChange}
            type="text"
            required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
