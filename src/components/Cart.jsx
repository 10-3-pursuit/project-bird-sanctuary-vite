const Cart = ({ total, adoptionList, RemoveBirdFromCart, discount }) => {

  // when the adopt button is clicked Total should be updated to reflect the combined sum of all birds currently being adopted
  // based on how high the total number is this will dictate which bonusItems they qualify for 
  // I've imported data from bonus items --->   {bonus}
  // will have to plug this in as a parameter for this componenet so that we can call this information from the file dynamically and we will couple this along with a boolean or switch that will activate once a certain amount is reached

  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <h5>Total: {total}</h5>
      <p>Discount: {discount}</p>
        <ol>
          {/* `${birdie.id}${index}` */}
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
          <li>
            This is a test 
          </li>
        </ul>
    </div>
  );
};

export default Cart;
