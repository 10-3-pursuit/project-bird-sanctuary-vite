const Cart = ({cart, total, handleRemoveBird }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: {total}$</h4>
      <h5>Discount: </h5>
      <ol>
        {cart.map((bird) => (
          <li key={bird.id}>
            <p>{bird.name} - ${bird.amount}</p>
            <button onClick={()=>handleRemoveBird(bird.name)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
