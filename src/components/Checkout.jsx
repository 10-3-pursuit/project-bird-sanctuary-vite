const Checkout = ({user, handleTextChange, handleSubmit}) => {
  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input 
          type="text" 
          name="firstname"
          value={user.firstName}
          onChange={handleTextChange}
          id="firstName"
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input 
          type="text" 
          name="lastname"
          value={user.lastName}
          onChange={handleTextChange}
          id="lastName"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input 
          type="text" 
          name="email"
          value={user.email}
          onChange={handleTextChange}
          id="email"
        />
        <br />
        <label htmlFor="zp">Zip Code</label>
        <input 
          type="number" 
          name="zp"
          value={user.zp}
          onChange={handleTextChange}
          id="zp"
        />
        <br />
        <button 
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
