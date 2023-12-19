import { useState } from "react";
const Cart = ({cart, setCart, total}) => {
  
  const deleteCartItem = (id => {
    // console.log('deleting', bird.name)
    const newList = cart.filter((item) => item.id !==id);
    setCart(newList)
  })

  const valueArr = cart.map(function(item){return item.id});
  const isDuplicate = valueArr.some(function(item, index){
    // cart.some(otherItem => otherItem.id === item.id);
    return valueArr.indexOf(item) != index;
  });
  // const addBirdToCart = (bird) => { 
  //   console.log('clicked', bird);
  //   const newBird = {
  //     id: bird.id,
  //     name: bird.name,
  //     amount: bird.amount,
  //     img: bird.img
  //   }
  //   setCart(prevCart => [newBird, ...prevCart]);
  //   const newTotal = cart.reduce((sum, item) => {
  //     return sum + item.amount
  //   }, newBird.amount);
  //   setTotal(newTotal)
  // }

  const cartBirds = cart.map(item => (
    <li key={item.id}>
    {item.name} {item.amount}
    <button onClick={() => deleteCartItem(item.id)}>Delete</button>
    </li>
  ));

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
      )};
      <ol>{cartBirds}</ol>
    </div>
  );
};

export default Cart;
