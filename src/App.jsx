import {useState} from 'react'
import Header from "./components/Header";
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Cards from './components/Cards';


function App() {
  const [cartItems, setCartItems] = useState([])
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)

  const handleAddToCart = (birdItem) => {
    const copiedCart = [...cartItems, birdItem]
    setCartItems(copiedCart)
    const totalBeforeDiscount = copiedCart.reduce((acc, cur) => acc + cur.amount, 0)
    if(copiedCart.length >= 3) {
      setDiscount(10)
      setTotal(totalBeforeDiscount - (totalBeforeDiscount * 0.10))

    } else {
      setTotal(totalBeforeDiscount)
    }
  }

  return (
    <div>
      <Header />
      <main>
        <aside>
          <Cart cartItems={cartItems} setCartItems={setCartItems} total={total} discount={discount}/>
          <Checkout setTotal={setTotal} setDiscount={setDiscount} setCartItems={setCartItems} />
        </aside>
        <Cards handleAddToCart={handleAddToCart}/>
      </main>
    </div>
  );
}

export default App;
