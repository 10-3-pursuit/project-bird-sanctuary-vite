import { useState } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

function App() {
  const [birds, setBirds] = useState(birdData)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(false)


  function handleDiscount(cart){
    const preDiscountedTotal = cart.reduce((acc,item)=> acc + item.amount,0)
    if(cart.length > 2){
      const discountedTotal = preDiscountedTotal * .9
      setDiscount(true)
      setTotal(discountedTotal)
    }else{
      setDiscount(false)
      setTotal(preDiscountedTotal)
      
    }
  }
 
  function addToCart(birdId){
    const birdAdded = birds.find(bird=> bird.id === birdId)
    if(cart.includes(birdAdded)){
      alert("Bird already chosen")
    }else{
      const updatedCart = [...cart,birdAdded]
      setCart(updatedCart)
      setTotal(total + birdAdded.amount)
      handleDiscount(updatedCart)
    }
  }

  function removeFromCart(itemID){
    const filteredArr = cart.filter(item=> item.id !== itemID)
    const itemRemoved = cart.find(item=> item.id === itemID)
    setCart(filteredArr)
    setTotal(total - itemRemoved.amount)
    handleDiscount(filteredArr)
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
        <Cart discount={discount} removeFromCart={removeFromCart} cart={cart} total={total}/>
        <Checkout />
        </aside>
        <Cards addToCart={addToCart} birds={birds}/>
      </main>
    </div>
  );
}

export default App;
