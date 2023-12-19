//CARD COMPONENT SECTION//
const Cards = ({ birds, handleAddToCart }) => {
//DISPLAYED NAME,IMAGE,PRICE
return (
  <div className="birds">
    {birds.map((bird, index) => (
      // ASSIGNED CLASS NAME "CARD"
      <div key={index} className="card">
        <h2>{bird.name}</h2>
        <img src={bird.img} alt={bird.name} />
        <p>Price: ${bird.amount.toFixed(2)}</p>
        {/* ADDED ADOPT BUTTON */}
        <button onClick={() => handleAddToCart(bird)}>Adopt</button>
      </div>
    ))}
  </div>
  );
}
export default Cards;

