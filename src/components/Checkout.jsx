const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h5>First Name</h5>
      <form>
        <input type="text" />
      </form>
      <h5>Last Name</h5>
      <form>
        <input type="text" />
      </form>
      <h5>Email</h5>
      <form>
        <input type="text" />
      </form>
      <h5>Zip Code</h5>
      <form>
        <input type="text" />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default Checkout;
