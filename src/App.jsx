import Cards from "./components/Cards";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
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
      setTotalCost((prevTotalCost) => ({
        ...prevTotalCost,
        message: 'Bird Already Chosen'
      }));
      return;
    }

    setCart([...cart, bird]);

    setTotalCost((prevTotalCost) => ({
      ...prevTotalCost,
      message: ''
    }));
  };

  const handleDelete = (bird) => {
    const filteredCart = cart.filter((item) => item.id !== bird.id);
    setCart(filteredCart);
  };

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    setCart([]);
    setTotalCost({
      discountedAmt: 0,
      discount: 0,
      discountedAmount: 0,
      chosenBirdId: null,
      message: '',
    });
    alert('You have successfully adopted birds. Thank you!');
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
          <Checkout handleCheckout={handleCheckout} />
        </aside>
        <Cards addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;




