const Cart = ({ cartItems, handleRemoveFromCart, checkoutTotal, discountTotal }) => {
  return (
    <div class= "cart">
      <h3>Your Cart</h3>
      <ol>
        {cartItems.map((bird, index) => (
          <li key={index}>
            {bird.name} - ${bird.amount.toFixed(2)}{' '}
            <button onClick={() => handleRemoveFromCart(bird)}>Delete</button>
          </li>
        ))}
      </ol>
      <h4>Total: ${checkoutTotal.toFixed(2)}</h4>
      {discountTotal > 0 && <h5>Discount: {discountTotal}%</h5>}
    </div>
  );
};

export default Cart;