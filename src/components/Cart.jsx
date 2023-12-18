


const Cart = ({ cart, handleDelete, totalCost }) => {
  const { discountedAmt, discount, discountedAmount, chosenBirdId, message } = totalCost;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ol>
        {cart.length > 0 &&
          cart.map((bird) => (
            <li key={bird.id} bird={bird}>
              {bird.name} - {bird.amount}
              <button onClick={() => handleDelete(bird)}>Remove</button>
            </li>
          ))}
      </ol>
      <h5>Discount: {totalCost.discount}%</h5>
      <h4>Total Cost: ${totalCost.discountedAmount}</h4>
    </div>
  );
};

export default Cart;



