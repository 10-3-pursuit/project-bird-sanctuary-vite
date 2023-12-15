import { useState } from "react";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, setCart }) => {
  const [hasDiscount, setHasDiscount] = useState(false);

  const removeFromCart = (id) => {
    const oldLen = cart.length;
    const newCart = cart.filter(bird => bird.id !== id);
    const newLen = newCart.length;
    if (newLen === 2 && newLen < oldLen) {
      setHasDiscount(false);
    }
    setCart(newCart);
  }

  const calculateCost = () => {
    let cost = cart.reduce((acc, curr) => acc + curr.amount, 0);
    if (hasDiscount) {
      // apply discount
      cost *= 0.90;
    }
    return cost;
  }

  const totalCost = calculateCost();
  
  const calculateBonuses = () => {
    if (totalCost > 1000) {
      return bonusItems;
    } else if (totalCost >= 500) {
      return bonusItems.slice(0,3);
    } else if (totalCost >= 300) {
      return bonusItems.slice(0,2)
    } else if (totalCost >= 100) {
      return bonusItems.slice(0,1)
    }
    return [];
  }

  const bonuses = calculateBonuses();

  return (
    <div className="cart">
      <h5>Discount: {hasDiscount ? 10 : 0}%</h5>
      <h4>Total Cost: ${totalCost}</h4>
      <ol>
        {cart.map(item => <li>
          {item.name} ${item.amount} <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>)}
      </ol>
      <h6>Your donations has qualified you for the following items:</h6>
      <ul>
          {bonuses.map(bonus => <li>
            {bonus}
          </li>)}
      </ul>
    </div>
  );
};

export default Cart;
