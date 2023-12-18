import Cards from "./components/Cards";
import "./App.css";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState({
    discountedAmt: 0,
    discount: 0,
    discountedAmount: 0,
    chosenBirdId: null,
    message: '',
  });

  const addToCart = (bird) => {
  
    if (cart.some((cartBird) => cartBird.id === bird.id)) {
  
      setTotalCost({ ...totalCost, message: 'Bird Already Chosen' });
      return;
    }
  
    setCart([...cart, bird]);
    setTotalCost({ ...totalCost, message: '' });
  };

  const handleDelete = (bird) => {
    const filteredCart = cart.filter((item) => item.id !== bird.id);
    setCart(filteredCart);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      const newTotalCost = cart.reduce(
        (acc, bird) => {
          const newDiscountedAmt = acc.discountedAmt + (bird.amount || 0);
          const newDiscount = cart.length >= 3 ? 10 : 0;

          return {
            discountedAmt: newDiscountedAmt,
            discount: newDiscount,
            discountedAmount: newDiscountedAmt - (newDiscountedAmt * newDiscount) / 100,
            chosenBirdId: bird.id,
            message: '',
          };
        },
        { discountedAmt: 0, discount: 0, discountedAmount: 0, chosenBirdId: null, message: '' }
      );

      setTotalCost(newTotalCost);
    };

    calculateTotalCost();
  }, [cart]);

  return (
    <div>
      <header>
        <h1>Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <main>
        <aside>
          <Cart cart={cart} handleDelete={handleDelete} totalCost={totalCost} />
        </aside>
        <Cards addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;


