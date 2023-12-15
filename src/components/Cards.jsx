
const Cards = ({birds, handleAdopt}) => {


  return (
    <div className="birds">
      <h1>Card Component</h1>
      {birds.map((bird) => (
      <div className="card" key={bird.id}>
        <img src= {bird.img} alt= {bird.name} />
        <h3>{bird.name}</h3>
        <p>Price: ${bird.price}</p>
        <button onClick={()=>handleAdopt(bird)}>Adopt</button>
      </div>
    ))}

    </div>
  );
};

export default Cards;
