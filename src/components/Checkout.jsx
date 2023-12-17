const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="bird-form">
        <p>
          <label htmlFor="first-name">First Name: </label><br/>
          <input name="first-name"/>
        </p>
        <p>
          <label htmlFor="last-name">Last Name: </label><br/>
          <input name="last-name"/>
        </p>
        <p>
          <label htmlFor="email">email: </label><br/>
          <input name="email"/>
        </p>
        <p>
          <label htmlFor="Zipcode">ZipCode: </label><br/>
          <input name="Zipcode"/>
        </p>
        <p>
          <input type="button" value="Submit"/>
        </p>
      </form>
    </div>
  );
};

export default Checkout;
