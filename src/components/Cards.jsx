import birdData from "../data/birds";


const Cards = ({addBird}) => {
  return (
    <div className="birds">
     
        {birdData.map((bird) => <li className="card" key={bird.id}>
          <div>{bird.name}</div>
          <div>{bird.amount}</div>
          <img src ={bird.img}/>
          <button onClick={() => addBird(bird)}>Adopt</button></li>)}
     
    </div>
  );
};

export default Cards;
