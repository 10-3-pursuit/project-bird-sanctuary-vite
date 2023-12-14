const Cart = ({cart, handleRemoveBird }) => {
  return (
    <div className="cart">
      <h2>Cart Component</h2>
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
