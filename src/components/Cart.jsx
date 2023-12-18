const Cart = ({ cart }) => {
  return (
    <ol className="cart">
      {/* <h2>Cart Component</h2> */}
      {cart.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.name}</span>
            <span> ${item.amount}</span>
          </li>
        )
      })}
    </ol>
  );
};

export default Cart;
