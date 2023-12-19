import bonusItems from "../data/bonusItems"

const Cart = ({shoppingCart, removeFromCart, handleDiscount, discount}) => {
  
  const discountText = discount > 0 ? "10%" : "0%";


  const bonusItemsList = () => {
    if (handleDiscount >= 100 && handleDiscount < 300) {
      return [bonusItems[0]]
    } else if (handleDiscount >= 300 && handleDiscount < 500) {
      return [bonusItems[0], bonusItems[1]]
    } else if (handleDiscount >= 500 && handleDiscount < 1000) {
      return [bonusItems[0], bonusItems[1], bonusItems[2]]
    } else if (handleDiscount >= 1000) {
      return bonusItems
    } else {
      return []
    }
  }
  const qualifyFor = () => {
    if (bonusItemsList().length > 0) {
      return <span>Your donations have qualified you for the following items:</span>;
    } else {
      return null;
    }
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
        <h5>Discount: {discountText}</h5>
        <h4>Total: ${handleDiscount}</h4>
      <ol>
      {shoppingCart.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.name}: ${item.amount}</span>
            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
          </li>
        )
      })}
      </ol>
      <ul>
        {qualifyFor()}
        {bonusItemsList().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
