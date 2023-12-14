const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <ol>
        {cart.map((bird) => (
          <li key={bird.id}>
            <p>{bird.name} - {bird.amount}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
