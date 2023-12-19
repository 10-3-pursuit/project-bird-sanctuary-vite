import React from "react";

export default function Cards({ exoticBird,  addToCart}){
 

  return (
    
    <ul className="birds">
      {exoticBird.map((bird) => {
        return (
  <li  key={bird.id} className="card">
    <span>{bird.name}</span>
    <img src={bird.img} alt={bird.name}></img>
    <span>price: {bird.amount}</span>
    <button
    onClick={() => {
      addToCart(bird);
    }}>
      Adopt
    </button>
  </li>
  );
})}
  </ul>
  
  );
};


