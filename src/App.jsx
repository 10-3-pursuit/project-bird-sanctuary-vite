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
    const [item1, item2, item3, item4] = bonusItems
    switch (true) {
      case (total >= 1000):
        setBonus(
          [item1, item2, item3, item4]
        )
        break;
      case (total >= 500):
        setBonus(
          [item1, item2, item3]
        )
        break;
      case (total >= 300):
        setBonus(
          [item1, item2]
        )
        break;
      case (total >= 100):
        setBonus([item1])
        break
      default: 
        setBonus([])
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
          <Checkout setBonus={setBonus} setTotal={setTotal} setDiscount={setDiscount} setCartItems={setCartItems} />
        </aside>
        <Cards handleAddToCart={handleAddToCart}/>
      </main>
    </div>
  );
}

export default App;
