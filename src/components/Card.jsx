import birds from '../data/birds'


const Card = () => {
  const handleOnClick = (bird) => {
    return <li>{bird.name}: ${bird.amount} <button onClick={()=>{}}>Delete</button></li>
  }
  return (
    <div>
      {birds.map(bird=> {
        return (
          <section className="card" key={bird.id}>
            <h3>{bird.name}</h3>
            <p>Price ${bird.amount}</p>
            <img src={bird.img}/>
            <button onClick={()=>handleOnClick(bird)}>Adopt</button>
          </section>
        )
      })}
    </div>
  )
}

export default Card