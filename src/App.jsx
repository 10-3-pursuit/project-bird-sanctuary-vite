import data from "./data/birds";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
// first to make sure my bird data is all set in my inspect through the console
// console.log(data);


function App() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipcode: '',
  });
  const [total, setTotal] = useState(0);
  
  const addBirdToCart = (bird) => { 
    console.log('clicked', bird);
    const newBird = {
      id: bird.id,
      name: bird.name,
      amount: bird.amount,
      img: bird.img
    }
    setCart(prevCart => [newBird, ...prevCart]);
    const newTotal = cart.reduce((sum, item) => {
      return sum + item.amount
    }, newBird.amount);
    setTotal(newTotal)
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     zipcode: '',
  //   });
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const birdData = data.map(bird => {
    return <div key={bird.id} className="card"> 
      <h1>{bird.name}</h1>
      <p>{bird.amount}</p>
      <figure>
        <img src={bird.img} alt={bird.name} />
      </figure>
      <button onClick={() => addBirdToCart(bird)}>Adopt</button>
    </div>
  })

  return (
    <div>
      <header>
        <h1>🕊️ BIRD🦩SANCTUARY 🦜</h1>
        <h2>donate to adopt a bird! 🦚</h2>
      </header>
      <main>
        <aside>
          <Cart total={total} cart={cart} setCart={setCart}/>
          <Checkout formData={formData} setFormData={setFormData}/>
        </aside>
      
        <div className="bird-container">
        {birdData}
        </div>
        
      </main>
    </div>
  );
}

export default App;
