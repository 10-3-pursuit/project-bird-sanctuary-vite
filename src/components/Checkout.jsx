const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">
          <h5>First Name</h5>
          <input 
            // onChange={handleChange}
            // value= {state.firstName}
            type="text" 
            name="firstName" 
            id="firstName"  
          />
        </label>
        <label htmlFor="lastName">
          <h5>Last Name</h5>
          <input 
            // onChange={handleChange}
            // value={state.lastName}
            type="text" 
            name="lastName" 
            id="lastName" 
          />
        </label>
        <label htmlFor="email">
          <h5>Email</h5>
          <input
            // onChange={handleChange}
            // value={state.email}
            type="text" 
            name="email" 
            id="email"
          />
        </label>
        <label htmlFor="zip">
          <h5>Zip</h5>
          <input 
            // onChange={handleChange}
            // value={state.zip}
            type="text" 
            name="zip" 
            id="zip"  
          />
        </label>
        <div>
        <button /*onClick={handleSubmit}*/>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
