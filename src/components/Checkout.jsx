const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="first-name">First Name
        <input id="first-name" name="first-name" type= "text"></input>
        </label>
        <br></br>
        
        <label htmlFor="last-name">Last Name
        <input id="last-name" name="last-name" type= "text"></input>
        </label>
        <br></br>

        <label htmlFor="email">Email
        <input id="email" name="email" type= "email"></input>
        </label>
        <br></br>

        <label htmlFor="zip-code">Zip Code
        <input id="zip-code" name="zip-code" type= "number"></input>
        </label>
        <br></br>
        


        
      </form>
    </div>
  );
};




export default Checkout;


