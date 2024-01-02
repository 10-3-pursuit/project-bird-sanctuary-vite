const Cards = ({ birdData }) => {
  return (
    <ul>
      {birdData.map((bird) => (
        <div className="birds">
          <div className="cards">
            <h4>{bird.name}</h4>
            <h5>${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />

            <button>Adopt</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Cards;
