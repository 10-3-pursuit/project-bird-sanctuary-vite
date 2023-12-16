const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        {/* first name */}
        First name:
        <label htmlFor="fname" />
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        {/* last name */}
        Last name:
        <label htmlFor="lname" />
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        {/* email */}
        Email:
        <label htmlFor="email" />
        <input type="email" id="email" name="email" />
        <br />
        <br />
        {/* zip code */}
        <label htmlFor="zipcode">Zip Code:</label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          pattern="[0-9]{5}"
          title="Please enter a 5-digit ZIP code"
        />
        <br />
        <br />
        {/* SUBMIT BUTTON */}
        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
};

export default Checkout;

// <input type="text" id="fname" name="fname"><br><br>
// <label for="lname">Last name:</label>
// <input type="text" id="lname" name="lname"><br><br>
