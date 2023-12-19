
import bonusItems from "../data/bonusItems"
const Cart = ({cartContent, birdPrice, removeBird}) => {

  const calculateDiscount= () => {
    if (cartContent.length >= 3) {
      return birdPrice * .1
    } else{return 0 };
  }
  const discount = calculateDiscount();
  const finalPrice = birdPrice - discount;
  let Bonus = [];

  const calculateBonus = () => {
if(finalPrice > 1000) {
  Bonus = [...bonusItems];
  } else if (finalPrice >= 500) {
    Bonus = [bonusItems.slice(0, 2)];
} else if (finalPrice >= 300) {
  Bonus = [bonusItems.slice(0, 1)];
}
else if(finalPrice >= 100) {
  Bonus = [bonusItems[0]];
}
  }
calculateBonus()

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: {finalPrice}</h4>
      <h5>Discount: {discount === 0 ? 0 : 10}%</h5>

      <ol>
        {cartContent.length > 0 && cartContent.map(bird => 
        
        <li key= {bird.id}>{bird.name} {bird.amount} 
        
        <button onClick={() => removeBird(bird.id) }>Delete</button></li>)}
      </ol>
      {Bonus.length > 0 && bonusItems.map((bonusItem, index) => (<li key={index} >{bonusItem}</li>))} 
      
    </div>
  );
};


// const removeBird = ({cartContent, birdPrice}) => {

// }


export default Cart;
