import { useState } from "react";

const Cart = ({cart,removeFromCart,total,discount,bonus}) => {


  return (
    <div className="cart">
      <h2>Cart</h2>
      <h5 className="discount">Discount {discount ? <span>10%</span>:<span>0%</span>}</h5>
      <ol>
      {cart.map(item=>{
        const amountToDollars = `$${item.amount.toFixed(2)}`
        return (
        <li key={item.id}>
          <p>{item.name}: {amountToDollars}</p>
          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </li>
        )
      })}
      </ol>
      <ul>
       {bonus.length > 0 && <p>Your donations have qualified you for the following items:</p>}
        {bonus.map(bonusItem=> <li key={bonusItem}>
          <p>{bonusItem}</p>
        </li>)}
      </ul>
      <h4 className="total">Total: ${total}</h4>
    </div>
  );
};

export default Cart;
