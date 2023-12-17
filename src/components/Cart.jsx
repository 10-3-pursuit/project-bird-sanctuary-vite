import { useState } from "react";
import bonusItems from "../data/bonusItems";

// const bonus = bonusItems;

const Cart = (props) => {


  // function checkForBonus(){
  //   if(props.cartContent.length === 1 && (props.total >= 100 && props.total < 300)){
  //     return <li>{bonusItems[0]}</li>
  //   }
  //   else if(props.cartContent.length === 2 && (props.total >= 300 && props.total < 500)){
  //     console.log(props.cartContent)
  //     return (
  //       <>
  //       <li>{props.bonusItems[0]}</li>
  //       <li>{props.bonusItems[1]}</li>
  //       </>
  //     )
  //   }
  // }




  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Discount: {props.cartContent.length >=3 ? "10%" : "0%"}</h4>
      <h4>Total: ${props.cartContent.length < 3 ? props.total : props.total * 0.9} </h4>
      <ol>
        {(props.cartContent.length > 0) && props.cartContent.map((bird) => (
          <li key={bird.id}>{bird.name} <button onClick={()=> props.removeBird(bird.id)}>Remove</button></li>
        ))}
      </ol>
      <ul>
        {props.bonus.length > 0 && props.bonus.map((bonusItem, index) => (
          <li key={index}>{bonusItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
