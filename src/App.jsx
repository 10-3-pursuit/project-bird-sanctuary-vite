import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import birds from "./data/birds"


function App() {

  const [shoppingCart, setShoppingCart] = useState([])
  const [total, setTotal] = useState(0)

  function addToCart (singleBird) {
    const cartedBird = birds.find((bird) => bird.id === singleBird)

    if (shoppingCart.find((item) => item.id === cartedBird.id)) {
      alert("Bird Already Chosen")
      return
    }
    const newCart = [...shoppingCart, cartedBird]
      setShoppingCart(newCart)
    
    if (singleBird) {
      setTotal((oldTotal) => oldTotal += cartedBird.amount)
    }
    console.log(shoppingCart)
  }

  function removeFromCart(singleBirdId) {
    const updatedCart = shoppingCart.filter((bird) => bird.id !== singleBirdId)
    setShoppingCart(updatedCart)
    
    const newTotal = updatedCart.reduce((total, bird) => total + bird.amount, 0)
    setTotal(newTotal)
  }
  const resetCart = () => {
    setShoppingCart([])
    setTotal(0)
  }
  const discount = shoppingCart.length >= 3 ? total * 0.1 : 0
  const handleDiscount = total - discount

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart shoppingCart={shoppingCart} removeFromCart={removeFromCart} handleDiscount={handleDiscount} discount={discount}/>
          <Checkout resetCart={resetCart} />
        </aside>
        <Cards birds={birds} addToCart={addToCart}/>
      </main>
    </div>
  );
}

export default App;
