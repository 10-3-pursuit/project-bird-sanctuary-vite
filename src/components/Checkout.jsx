const Checkout = () => {
  return (
    <div className="checkout">
      <form action="submit">
        <h2>Checkout</h2>
        <label htmlFor="fName">
          First Name
          <input type="text" name='fName' id='fName' />
        </label>
        <label htmlFor="lName">
          Last Name
          <input type="text" name='lName' id='lName'/>
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name='email' id='email'/>
        </label>
        <label htmlFor="zip">
          Zip Code
          <input type="text" name='zip' id='zip'/>
        </label>
      </form>
    </div>
  );
};

export default Checkout;
