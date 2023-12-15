import { useState } from "react";


  

  return (
    <div className="checkout">
      <h2>Checkout Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Checkout;
