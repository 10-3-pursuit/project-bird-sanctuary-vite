const Cart = ({cart, total}) => {
  
  console.log(cart);

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
      <button>Delete</button>
      </li>
    }
  })

  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <h4>Total Amount: {total}</h4>
      <ol>{cartBirds}</ol>
    </div>
  );
};

export default Cart;
