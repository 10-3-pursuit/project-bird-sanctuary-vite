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
      <h2>Cart Component</h2>
    </div>
  );
};

export default Cart;
