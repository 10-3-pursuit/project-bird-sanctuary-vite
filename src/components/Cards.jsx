

const Cards = ({ birds, addToCart}) => {
  return (
    <div className="birds">
      {birds.map(bird => (
        <div key={bird.id} className="card">
          <img src={bird.img}></img>
          <h3>Name: {bird.name}</h3>
          <h3>Adoption Fee: {bird.amount}</h3>
          <button onClick={() => handleAdopt(bird)}>Adopt</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
