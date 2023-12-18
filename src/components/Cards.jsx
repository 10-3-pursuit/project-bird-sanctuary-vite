import React from 'react'

import birdData from "../data/birds.js";

const Cards = ({addCart}) => {

  return (
    <div className="birds">
      <div className="cards">
        {birdData.map((bird) => (
          <div key={bird.id} className="card">
            <h2>{bird.name}</h2>
            <h5>Price: ${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />
            <button onClick={()=>addCart(bird.id)}>ADOPT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;