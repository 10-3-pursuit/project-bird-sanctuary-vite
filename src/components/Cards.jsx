import birdData from "../data/birds";


const Cards = () => {
  return (
    <div className="birds">
      <div className="cards">
        {birdData.map((bird) => <li className="card">
          <div>{bird.name}</div>
          <div>{bird.amount}</div>
          <div ><img src ={bird.img}/></div></li>)}
      </div>
    </div>
  );
};

export default Cards;
