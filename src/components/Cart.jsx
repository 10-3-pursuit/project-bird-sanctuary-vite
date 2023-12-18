import { useState } from "react";
import bonusItems from '../data/bonusItems'

const Cart = ({cart, remove, amount}) => {
  const [bonus, setBonus] = useState(bonusItems)

  let bonusContent = null

  if (amount >= 100 && amount < 300) {
    bonusContent = (
      <ul>
        <li>{bonus[0]}</li>
      </ul>
    )
  } else if (amount >= 300 && amount < 500) {
    bonusContent = (
      <ul>
        <li>{bonus[0]}</li>
        <li>{bonus[1]}</li>
      </ul>
    )
  } else if (amount >= 500 && amount < 1000) {
    bonusContent = (
      <ul>
        <li>{bonus[0]}</li>
        <li>{bonus[1]}</li>
        <li>{bonus[2]}</li>
      </ul>
    )
  } else if (amount >= 1000) {
    bonusContent = (
      <ul>
        <li>{bonus[0]}</li>
        <li>{bonus[1]}</li>
        <li>{bonus[2]}</li>
        <li>{bonus[3]}</li>
      </ul>
    )
  }


  return (
    <div className="cart">
      <h2>Cart</h2>
      <ol>
        {cart.map((bird, index) => (
          
          <li key={index} className="cart-li">{bird.name} | Adoption fee: {bird.amount} <button onClick={() => remove(bird)}>Delete</button></li>
        ))}
      </ol>
      <h5>Discount: {cart.length >= 3 ? `10` : `0`}% </h5>
      <h4>Total: {amount}</h4>

      Your donations have qualified you for the following items:
      {bonusContent}
    </div>
  );
};

export default Cart;
