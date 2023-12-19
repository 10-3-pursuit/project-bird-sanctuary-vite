import birds from "../data/birds";

const Cards = ({ cart, setCart }) => {
  const clickAdopt = (bird) => {
    const currentIds = cart.map(bird => bird.id);
    if (!currentIds.includes(bird.id)) {
      setCart([...cart, bird]);
    } else {
      alert("You already added this bird to the cart.");
    }
  }

  return (
    <div className="birds">
      {birds.map(bird => {
        return <div className="card" key={bird.id}>
          <h3>{bird.name}</h3>
          <img src={bird.img} alt={bird.name}></img>
          <h3>Price: ${bird.amount}</h3>
          <button onClick={() => clickAdopt(bird)}>Adopt</button>
        </div>
      })} 
    </div>
  );
};

export default Cards;
