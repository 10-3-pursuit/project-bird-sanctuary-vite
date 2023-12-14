


const Cards = ({birds}) => {

  return (
    <div className="birds">
      {birds.map((bird)=>(
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
