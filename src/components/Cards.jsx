const Cards = ({ birdsData, addToCart }) => {
  return (
    <ul className="birds">
      {/* Looping through birdData to display cards */}
      {birdsData.map((bird) => (
        <li className="card" key={bird.id} style={{ listStyle: "none" }}>
          <p>
            <strong>{bird.name}</strong>
          </p>

          <p>
            <strong>Price: ${bird.amount}</strong>
          </p>
          <img src={bird.img} alt={bird.name} />
          <button className="rainbow-button" onClick={() => addToCart(bird)}>
            ADOPT
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
