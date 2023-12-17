// DEFINED THE CART FUNCTION COMPONENT
const Cart = ({ cartItems, handleRemoveFromCart, checkoutTotal, discountTotal, bonusItems }) => {

return (
  <div className="cart">
    <h3>Your Cart</h3>
    <ol>
      {/* Map through cartItems and display each item in a list */}
      {cartItems.map((bird, index) => (
        <li key={index}>
           {/* Display bird name and amount, along with a delete button */}
          {bird.name} - ${bird.amount.toFixed(2)}{' '}
          <button onClick={() => handleRemoveFromCart(bird)}>Delete</button>
        </li>
      ))}
    </ol>
    <h4>Total: ${checkoutTotal.toFixed(2)}</h4>
    {/* Display discount if applicable */}
    {discountTotal > 0 && <h5>Discount: {discountTotal}%</h5>}
    {/* Bonus items section */}
    {bonusItems.length > 0 && (
      <div>
        <h5>Bonus Items:</h5>
        <ul>
          {/* Map through bonusItems and display each bonus item in a list */}
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