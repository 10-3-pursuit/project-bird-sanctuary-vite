const Cards = ({birds}) => {
  return (
    <div className="birds">
      <div className="cards">
        {birds.map(bird=> (
          <div key={bird.id} className="card">
            <h4>{bird.name}</h4>
            <h5>Price: ${bird.amount}</h5>
            <img src={bird.img} alt={bird.name}></img>
            <button>Adopt</button>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
