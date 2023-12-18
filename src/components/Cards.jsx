import birds from '../data/birds'

const Cards = ({ cart, setCart }) => {
  const addToCart = (bird) => {
    if (cart.find((item) => item.id === bird.id)) {
      alert('Bird Already Chosen')
    } else
      setCart([...cart, bird]);
  }
  return (
    <div className="birds">
      <div className="cards">
        {birds.map((bird) => {
          return (
            <div className='card' key={bird.id}>
              <h2>{bird.name}</h2>
              <span>Price: ${bird.amount}</span>
              <img src={bird.img} />
              <button onClick={() => addToCart(bird)}>Adopt</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Cards;
