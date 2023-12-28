const Cart = ({ total, adoptionList, RemoveBirdFromCart, discount, bonus }) => {

  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <h4>Total: {total}</h4>
      <h5>Discount: {discount}</h5>
        <ol>
          {adoptionList.map((birdie) => (
          <li key={birdie.id}>
            <span>{birdie.name}: </span>
            <span>${birdie.amount}</span>
            <span><button onClick={()=> RemoveBirdFromCart(birdie)}>Remove</button></span>
          </li>
          ))}
        </ol>
      <p>Your donations have qualified you for the following items:</p>
        <ul>
          {bonus.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Cart;
