const Cards = ({ birdData }) => {
  return (
    <ul>
      {birdData.map((bird) => (
        <div className="birds">
          <div className="cards">
            <h4>{bird.name}</h4>
            <img src={bird.img} alt={bird.name} />
            <h5>${bird.amount}</h5>
            <h5>ID : {bird.id}</h5>
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Cards;
