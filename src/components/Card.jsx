const Card = ({bird, handleAddToCart}) => {
  return (
          <section className="card">
            <h3>{bird.name}</h3>
            <p>Price ${bird.amount}</p>
            <img src={bird.img}/>
            <button onClick={()=>handleAddToCart(bird)}>Adopt</button>
          </section>
        )
      }
  

export default Card