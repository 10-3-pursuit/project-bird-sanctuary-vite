import {useState} from 'react'
import Header from "./components/Header";
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Cards from './components/Cards';
import bonusItems from './data/bonusItems'


function App() {
  const [cartItems, setCartItems] = useState([])
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  const [bonus, setBonus] = useState([])

  const addBonuses = (total) => {
    switch (true) {
      case (total >= 1000):
        setBonus(
          <>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            <li>{bonusItems[2]}</li>
          </>
        )
        break;
      case (total >= 500):
        setBonus(
          <>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
          </>
        )

        break;
      case (total >= 300):
        setBonus(
          <>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
          </>
        )
        break;
      case (total >= 100):
        setBonus(<li>{bonusItems[0]}</li>)
        break
      default: 
        null
    }
  }
  
  const handleAddToCart = (birdItem) => {
    if(cartItems.find(item=> item.id === birdItem.id)) {
      alert('Bird already chosen')
    } else {
      const copiedCart = [...cartItems, birdItem]
      setCartItems(copiedCart)
      const totalBeforeDiscount = copiedCart.reduce((acc, cur) => acc + cur.amount, 0)
      let newTotal = totalBeforeDiscount
      if(copiedCart.length >= 3) {
        setDiscount(10)
        setTotal(newTotal - (newTotal * 0.10))
      } else {
        setTotal(newTotal)
      }
      addBonuses(newTotal)
    }
  }

  const handleRemove = (birdItem) => {
    const copiedCart = [...cartItems]
    const filteredItems = copiedCart.filter(item=> item.id !== birdItem.id)
    setCartItems(filteredItems)
    const totalBeforeDiscount = filteredItems.reduce((acc, cur) => acc + cur.amount, 0)
    let newTotal = totalBeforeDiscount
    if(filteredItems.length >= 3) {
      setTotal(newTotal - (newTotal * 0.10))
    } else {
      setDiscount(0)
      setTotal(newTotal)
    }
    addBonuses(newTotal)
  }

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart bonus={bonus} cartItems={cartItems} total={total} discount={discount} handleRemove={handleRemove} />
          <Checkout setTotal={setTotal} setDiscount={setDiscount} setCartItems={setCartItems} />
        </aside>
        <Cards handleAddToCart={handleAddToCart}/>
      </main>
    </div>
  );
}

export default App;
