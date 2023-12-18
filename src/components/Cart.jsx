const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    console.log(id);
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart([...filteredCart]);
  }
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.amount, 0);
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <span>Total: ${calculateTotal()}</span>
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
