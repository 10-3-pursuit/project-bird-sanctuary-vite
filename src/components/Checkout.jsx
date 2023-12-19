import { useState } from "react";

const Checkout = ({reset}) => {

  const[user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    zipCode:"",
  })

  function handleChange(event){
    setUser({...user, [event.target.id]: event.target.value})
  }

  function submit(event){
    alert("You have successfully adopted birds. Thank You!");
    event.preventDefault();
    setUser({
      firstName:"",
      lastName:"",
      email:"",
      zipCode:"",
    });
    reset();
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        
        <label htmlFor="firstName">
          <p>First Name:</p>
        <input
          id= "firstName"
          onChange={handleChange}
          type="text"
          name="firstname"
          value={user.firstName}
        />
        </label>
        <label htmlFor="lastName">
          <p>Last name:</p>
          <input
          id="lastName"
          onChange={handleChange}
          type="text"
          name="lastname"
          value={user.lastName}
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            id="email"
            onChange={handleChange}
            type="text"
            name="email"
            value={user.email}
            />
          </label>
        <label htmlFor="zipCode">
          <p>Zip Code:</p>
          <input
          id="zipCode"
          onChange={handleChange}
          type="text"
          name="lastname"
          value={user.zipCode}
          />
        </label>
        <div className= "submit">
        <button onClick={submit}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
