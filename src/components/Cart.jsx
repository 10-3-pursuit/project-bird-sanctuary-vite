import { v1 as generateUniqueId } from "uuid";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, setCart, calculateCost, hasDiscount }) => {

  const removeFromCart = (id) => {
    const newCart = cart.filter(bird => bird.id !== id);
    setCart(newCart);
  }

  const totalCost = calculateCost(hasDiscount);
  
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
        {cart.map(item => <li key={item.id}>
          {item.name} ${item.amount} <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>)}
      </ol>
      <h6>Your donations has qualified you for the following items:</h6>
      <ul>
          {bonuses.map(bonus => <li key={generateUniqueId()}>
            {bonus}
          </li>)}
      </ul>
    </div>
  );
};

export default Cart;
