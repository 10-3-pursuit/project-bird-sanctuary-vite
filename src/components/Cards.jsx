const Cards = ({birds, addToCart}) => {


  return (
    <div className="birds">
        {birds.map(bird=>{
          return (
          <div key={bird.id} className="card">
            <h4>{bird.name}</h4>
            <span>Price: ${bird.amount}</span>
            <img src={bird.img} alt={bird.name}></img>
            <button onClick={()=>addToCart(bird.id)}>Adopt</button>
          </div>
          )
        })}
      </div>
  );
};

export default Cards;
