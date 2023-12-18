import birds from '../data/birds'

const Cards = () => {
  return (
    <div className="birds">
      <div className="cards">
        {birds.map((bird) => {
          return (
            <div className='card' key={bird.id}>
              <h2>{bird.name}</h2>
              <span>Price: ${bird.amount}</span>
              <img src={bird.img} />
              <button>Adopt</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Cards;
