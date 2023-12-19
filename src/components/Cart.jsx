import bonusItems from "../data/bonusItems"

export default function Cart({yourBirds, total, discount, removeFromCart}) {

  const discountTotal = total * (discount > 0 ? 0.9 : 1)

  const bonusList = () => {
    if (discountTotal >= 100 && discountTotal < 300) {
      return [bonusItems[0]]
    } else if ((discountTotal) >= 300 && (discountTotal) < 500) {
      return [bonusItems[0], bonusItems[1]]
    } else if ((discountTotal) >= 500 && (discountTotal) < 1000) {
      return [bonusItems[0], bonusItems[1], bonusItems[2]]
    } else if ((discountTotal) >= 1000) {
      return bonusItems
    } else {
      return []
    }
  }

  const qualify = () => {
    if (bonusList().length > 0) {
      return <span className="your-donations">Your donations have qualified you for the following items:</span>;
    } else {
      return null;
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: ${discount > 1 ? discountTotal : total}</h4>
      <h5>Discount: {discount}%</h5>
      <ol>
      {yourBirds.map((bird, index) => (
          <li className="bird-li" key={index}>
            <span>{bird.name}: ${bird.amount}</span>
            <button className="remove-button" onClick={()=>removeFromCart(bird.name)}>Delete</button>
          </li>
        ))}
      </ol>
      <ul>
        {qualify()}
        {bonusList().map((item, index) => (
          <li className="bonus-li" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
