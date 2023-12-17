const Cards = ({ birdsData, addToCart }) => {
  return (
    <div className="birds">
      <div className="cards">
        <ul>
          {birdsData.map((bird) => (
            <li className="card" key={bird.id} style={{ listStyle: "none" }}>
              <p>
                <strong>{bird.name}</strong>
              </p>

              <p>
                <strong>Price: ${bird.amount}</strong>
              </p>
              <img src={bird.img} alt={bird.name} />
              <button
                className="rainbow-button"
                onClick={() => addToCart(bird)}
              >
                ADOPT
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
