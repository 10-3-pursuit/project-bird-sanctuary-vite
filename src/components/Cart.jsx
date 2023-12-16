const Cart = ({ cartItems, handleRemoveFromCart, checkoutTotal, discountTotal, bonusItems }) => {
return (
  <div className="cart">
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
{/* Bonus items section */}
    {bonusItems.length > 0 && (
      <div>
        <h5>Bonus Items:</h5>
        <ul>
          {bonusItems.map((bonus, index) => (
            <li key={index}>{bonus}</li>
      ))}
        </ul>
      </div>
    )}
  </div>
  );
};
export default Cart;