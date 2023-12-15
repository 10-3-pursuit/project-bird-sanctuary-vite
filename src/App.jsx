import { useState } from "react";
import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import bonusItems from "./data/bonusItems"

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(false)
  const [bonus, setBonus] = useState([])

  function handleBonusItems(total){
    const bonusList = [...bonusItems]
    if(total >= 100 && total <=300){
      setBonus(bonusList.slice(0,1))
    }else if(total > 300 && total <=500){
      setBonus(bonusList.slice(0,2))
    }else if(total > 500 && total <=1000){
      setBonus(bonusList.slice(0,3))
    }else if(total > 1000){
      setBonus(bonusList)
    }else{
      setBonus([])
    }
  }


  function handleDiscount(cart){
    const preDiscountedTotal = cart.reduce((acc,item)=> acc + item.amount,0)
    if(cart.length > 2){
      const discountedTotal = preDiscountedTotal * .9
      setDiscount(true)
      setTotal(discountedTotal)
      handleBonusItems(discountedTotal)
    }else{
      setDiscount(false)
      setTotal(preDiscountedTotal)
      handleBonusItems(preDiscountedTotal)
    }
  }
 
  function addToCart(birdId){
    const birdAdded = birdData.find(bird=> bird.id === birdId)
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

  function reset(){
    setCart([])
    setTotal(0)
    setDiscount(false)
    setBonus([])
  }

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
        <Cart bonus={bonus} discount={discount} removeFromCart={removeFromCart} cart={cart} total={total}/>
        <Checkout reset={reset} />
        </aside>
        <Cards addToCart={addToCart} birds={birdData}/>
      </main>
    </div>
  );
}

export default App;
