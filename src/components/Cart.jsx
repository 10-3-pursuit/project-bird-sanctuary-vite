import { useState } from "react";
import bonusItems from '../data/bonusItems'

const Cart = ({cart, remove, amount}) => {
  const [bonus, setBonus] = useState(bonusItems)

  let bonusContent = null

  
  return (
    <div className="cart">
      <h2>Cart Component</h2>
    </div>
  );
};

export default Cart;
