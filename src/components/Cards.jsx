import birdData from "../data/birds";


const Cards = () => {
  return (
    <div className="birds">
      {birdData.map((bird)=>(
        <div className="card" key={bird.id}>
        <h1>{bird.name}</h1>
        <p>{bird.name}</p>
        <img src={bird.img} alt={bird.name} />
        <p>{bird.amount}</p>
        <button>Adopt</button>
      </div>
      ))}
    </div>
  );
};

export default Cards;
