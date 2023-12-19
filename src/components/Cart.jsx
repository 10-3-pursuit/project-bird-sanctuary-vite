// import { v1 as generateUniqueId } from "uuid";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, setCart }) => {
    const hasDiscount = cart.length > 2;

    const removeFromCart = (id) => {
        const newCart = cart.filter((bird) => bird.id !== id);
        setCart(newCart);
    };

    const calculateCost = () => {
        let cost = cart.reduce((acc, curr) => acc + curr.amount, 0);
        if (hasDiscount) {
            // apply discount
            cost *= 0.9;
        }
        return cost;
    };

    const totalCost = calculateCost();

    const calculateBonuses = () => {
        if (totalCost > 999) {
            return bonusItems;
        } else if (totalCost > 499) {
            return bonusItems.slice(0, 3);
        } else if (totalCost > 299) {
            return bonusItems.slice(0, 2);
        } else if (totalCost > 99) {
            return bonusItems.slice(0, 1);
        }
        return [];
    };

    const bonuses = calculateBonuses();

    return (
        <div className="cart">
            <h2>Cart</h2>
            <h5>Discount: {hasDiscount ? 10 : 0}%</h5>
            <h5>Total Cost: ${totalCost}</h5>
            <ol>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name}: ${item.amount}{" "}
                        <button onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
            <h5>Your donations has qualified you for the following items:</h5>
            <ul>
                {bonuses.map((bonus) => (
                    <li key={bonus.id}>{bonus.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
