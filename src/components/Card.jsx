import Cart from "./Cart"

const Card = ({ bird, addToCart }) => {

    return (
        <div className="card">
            <div>{bird.name}</div>
            <div> Cost: ${bird.amount}</div>
            <div className="img"><img src= {bird.img} /></div>
            <button onClick={() => addToCart(bird)}>Adopt</button>
        </div>
    )
}

export default Card