import { useState } from "react";

const Checkout = ({reset}) => {
  const userDefault = {
    firstName:"",
    lastName:"",
    email:"",
    zip:""
  }
  const [adoptionUser, setAdoptionUser] = useState(userDefault)

  function handleChange(e){
    setAdoptionUser({...adoptionUser, [e.target.id]:[e.target.value]})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!adoptionUser.firstName || !adoptionUser.lastName || !adoptionUser.email || !adoptionUser.zip){
      alert("Please fill in all form fields!")
      return
    }
    alert("You have successfully adopted birds. Thank you!")
    setAdoptionUser(userDefault)
    reset()
  }
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">
          <p>First Name</p>
          <input onChange={handleChange} value={adoptionUser.firstName} type="text" name="firstName" id="firstName"  />
        </label>
        <label htmlFor="lastName">
          <p>Last Name</p>
          <input onChange={handleChange} value={adoptionUser.lastName} type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input onChange={handleChange} value={adoptionUser.email} type="text" name="email" id="email"/>
        </label>
        <label htmlFor="zip">
          <p>Zip</p>
          <input onChange={handleChange} value={adoptionUser.zip} type="text" name="zip" id="zip"  />
        </label>
        <div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
