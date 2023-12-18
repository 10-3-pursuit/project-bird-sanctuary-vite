const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    console.log(id);
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart([...filteredCart]);
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ol>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <span> ${item.amount}</span>
              <span onClick={() => removeItem(item.id)}> 🗑️</span>
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default Cart;
