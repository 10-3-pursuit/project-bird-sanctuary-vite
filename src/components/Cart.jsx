const Cart = ({ cartList, handleDelete, bonusData }) => {
  // Calculate total amount and apply discounts, also handle bonus items
  // create a variable to save the total calculation to
  let totalAmount;
  totalAmount = cartList.reduce((acc, curr) => acc + curr.amount, 0);

  // function to calculate the discounted amount
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

  // bonus item function
  const bonusItem = () => {
    if (totalAmount >= 1000) {
      return bonusData;
    } else if (totalAmount < 1000 && totalAmount >= 500) {
      return bonusData.slice(0, 3);
    } else if (totalAmount < 500 && totalAmount >= 300) {
      return bonusData.slice(0, 2);
    } else if (totalAmount >= 100 && totalAmount < 300) {
      return [bonusData[0]];
    } else {
      return [];
    }
  };

  const showBonusItems = bonusItem();

  return (
    <div className="cart">
      {/* Displaying cart items, discounts, total, and bonus items */}
      <h2 style={{ backgroundColor: "white" }}>Cart</h2>
      <h5>Discount:{discount === 0 ? 0 : 10}%</h5>
      <h4>Total: ${discountedAmount}</h4>
      <ol>
        {cartList.map((bird) => (
          <li key={bird.id}>
            <strong style={{ backgroundColor: "white" }}>
              {bird.name}: ${bird.amount}
            </strong>
            <button
              className="rainbow-button delete-button"
              onClick={() => handleDelete(bird.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <p>Your donations has qualified you for the following items:</p>
      <ul className="bonus">
        {showBonusItems.length > 0 &&
          showBonusItems.map((bonus, index) => (
            <li key={index}>
              <span style={{ backgroundColor: "white" }}>{bonus}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
