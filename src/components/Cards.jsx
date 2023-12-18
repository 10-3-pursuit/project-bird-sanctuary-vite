const Cards = ({birds, addToCart}) => {
  return (
    <div className="birds">
        {birds.map(bird=> (
          <div key={bird.id} className="card">
            <h4>{bird.name}</h4>
            <h5>Price: ${bird.amount}</h5>
            <img src={bird.img} alt={bird.name}></img>
            <button onClick={() => addToCart(bird.id)}>Adopt</button>
          </div>
          )
        )}
    </div>
  );
};

export default Cards;
