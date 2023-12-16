const Cart = ({discount, total, cartItems, bonus, handleRemove}) => {

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h5>Discount: {discount}%</h5>
      <h4>Total: ${total}</h4>
      <ol>
        {cartItems.length > 0 &&
        cartItems.map(birdItem=> {
          return (
            <li key={birdItem.id}>
              {birdItem.name}: ${birdItem.amount}
              <button onClick={()=>handleRemove(birdItem)}>Remove</button>
            </li>
            )
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
      {bonus}
      </ul>
    </div>
  );
}

export default Cart;
