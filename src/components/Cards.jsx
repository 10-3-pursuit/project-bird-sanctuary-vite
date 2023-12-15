import { useState } from "react";
const Cards = ({birds}) => {
  const [cart, setCart] = useState([])
  function addtoCart(birdId){
    const birdAdded = birds.find(bird=> bird.id === birdId)
    if(cart.includes(birdAdded)){
      alert("You've already adopted this bird")
    }
    setCart([...cart,birdAdded])
    console.log(cart)
  }

  return (
    <div className="birds">
        {birds.map(bird=>{
          return (
          <div key={bird.id} className="card">
            <h4>{bird.name}</h4>
            <span>Price: ${bird.amount}</span>
            <img src={bird.img} alt={bird.name}></img>
            <button onClick={()=>addtoCart(bird.id)}>Adopt</button>
          </div>
          )
        })}
      </div>
  );
};

export default Cards;
