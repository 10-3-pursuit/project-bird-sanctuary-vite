const Cart = ({shoppingCart, removeFromCart, total}) => {
  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <ol>
      {shoppingCart.map((item) => {
        return (
          <li key={item.id}>
            <h4>{item.name}: ${item.amount}</h4>
            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
          </li>
        )
      })}
      </ol>
      <h5>Total: ${total}</h5>
    </div>
  );
};

export default Cart;
