const Cart = ({shoppingCart, removeFromCart, handleDiscount, discount}) => {
  
  const discountText = discount > 0 ? "10%" : "0%";

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
    </div>
  );
};

export default Cart;
