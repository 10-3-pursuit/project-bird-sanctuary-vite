const Cards = ({ birdsData }) => {
  return (
    <div className="birds">
      <div>
        <h1>Card Component</h1>
        <ul>
          {birdsData.map((bird) => (
            <li className="card" key={bird.id} style={{ listStyle: "none" }}>
              <p> {bird.name}</p>

              <p>Price: ${bird.amount}</p>
              <img src={bird.img} alt={bird.name} />
              <button>ADOPT</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
