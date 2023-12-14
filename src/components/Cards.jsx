


const Cards = ({ birds, handleAddToCart }) => {


  return (
    <div className="birds">
      {birds.map((bird)=>(
        <div className="card" key={bird.id}>
        <h5>{bird.name}</h5>
        {/* <p>{bird.name}</p> */}
        <img src={bird.img} alt={bird.name} />
        <p>${bird.amount}</p>
        <button onClick={()=>handleAddToCart(bird)}>Adopt</button>
      </div>
      ))}
    </div>
  );
};

export default Cards;
