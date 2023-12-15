const Cart = (props) => {

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h3>Discount: {props.discount}</h3>
      <h3>Total: ${props.total}</h3>
      <ol>
        
        {props.cartContent.length > 0 && props.cartContent.map((bird) => (
           <li key={bird.id}>{bird.name} <button onClick={()=>props.removeBird(bird.id, bird.amount)}>Remove</button></li>
        ))}
        {/* map over the cart content return an li for each item */}
        {/* conditional rendering to check if cart content has at least one item */}
        {/*  */}
      </ol>
    </div>
  );
};

export default Cart;
