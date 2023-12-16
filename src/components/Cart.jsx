import bonusItems from "../data/bonusItems.js"

const Cart = ({cart, handleRemoveBird }) => {

  const total = cart.reduce((acc, current) => acc + current.amount, 0)

  function calculateDiscount(){
    if(cart.length < 3){
      return 0
    } else {
      return total * 0.1
    }
  }

  const discount = calculateDiscount()
  const finalTotal = total - discount

  const [item1, item2, item3, item4] = bonusItems
  let bonus = []
  function calculateBonus(){
    if(finalTotal > 1000){
      bonus = [...bonusItems]
    } else if(finalTotal >= 500){
      bonus = [item1, item2, item3]
    } else if(finalTotal >= 300){
      bonus = [item1, item2]
    } else if (finalTotal >= 100){
      bonus = [item1]
    }
  }
  calculateBonus()

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h3>Total: ${finalTotal}</h3>
      <h5>Discount: {discount === 0 ? 0 : 10}%</h5>
      <ol>
        {cart.map((bird) => (
          <li key={bird.id}>
            {bird.name}: ${bird.amount}
            <button onClick={()=>handleRemoveBird(bird)}>Delete</button>
          </li>
        ))}
      </ol>
      {bonus.length > 0 && 
        <p>Your donations have qualified you for the following items:</p>}
      <ul>
        {bonus.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
