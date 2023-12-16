import Bonuses from "./Bonuses";

const Cart = ({discount, total, cartItems, setCartItems}) => {


  const handleRemove = (id) => {
    const copiedCart = [...cartItems]
    const filteredItems = copiedCart.filter(item=> {
      if(item.id !== id) {
        setCartItems(filteredItems)
        setTotal(total - item.amount)}
    })
  }

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
              <button onClick={()=>handleRemove(birdItem.id)}>Remove</button>
            </li>
            )
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {
          <Bonuses total={total} />
        }
      </ul>
    </div>
  );
};

export default Cart;
