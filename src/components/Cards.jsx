const Cards = (props) => {
  return (
    <div className="birds">
      <div className="cards">
        {props.birds.map((bird) => 
        <div key={bird.id} className="card">
          <h2>{bird.name}</h2>
          <img src= {bird.img} alt={bird.name} />
          <h3>Price: ${bird.amount}</h3>
          <button onClick={()=>props.addToCart(bird.id)}>Adopt!</button>
        </div>)}
      </div>
    </div>
  );
};

export default Cards;
