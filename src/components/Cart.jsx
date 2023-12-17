const Cart = ({ birdsData, total, cartList, handleDelete }) => {
  // state for the total to pass into the cart
  let totalAmount;

  // total function

  totalAmount = cartList.reduce((acc, curr) => acc + curr.amount, 0);

  const discountCalc = () => {
    // Check if there are 3 or more birds in the cart
    if (cartList.length >= 3) {
      // Apply a 10% discount
      return totalAmount * 0.1;
    } else {
      return 0;
    }
  };

  const discount = discountCalc();
  const discountedAmount = totalAmount - discount;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h5>Discount:{discount === 0 ? 0 : 10}%</h5>
      <h4>Total: ${discountedAmount}</h4>
      <ol>
        {cartList.map((bird) => (
          <li key={bird.id}>
            {bird.name}: ${bird.amount}
            <button onClick={() => handleDelete(bird.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <p>Your donations has qualified you for the following items:</p>
    </div>
  );
};

export default Cart;
