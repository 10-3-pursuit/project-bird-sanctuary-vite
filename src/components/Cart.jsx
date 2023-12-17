const Cart = ({cart, total}) => {

  const deleteCartItem = (bird) => {
    console.log('deleting', bird.name)
  }

  const valueArr = cart.map(function(item){return item.id});
  const isDuplicate = valueArr.some(function(item, index){
    return valueArr.indexOf(item) != index;
  });

  const cartBirds = cart.map(item => {
    if(isDuplicate) {
      return alert(`Bird Already Chosen`)
    } else {
      return <li key={item.id}>
      {item.name}, {item.amount}
      <button onClick={() => deleteCartItem(item)}>Delete</button>
      </li>
    }
  })

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length >= 3 ? (
        <>
        <h5>Discount: 10%</h5>
        <h4>Total Amount: {total * 0.9}</h4>
        </>
      ) : (
        <>
        <h5>Discount: 0%</h5>
        <h4>Total Amount: {total}</h4>
        </>
      )}
     
      <ol>{cartBirds}</ol>
    </div>
  );
};

export default Cart;
