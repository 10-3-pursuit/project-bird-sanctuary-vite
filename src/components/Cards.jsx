import React from 'react';
import BirdInfo from '../data/birds';

const Cards = () => {
  return (
    <div className="birds">
      <div className="cards">
        {BirdInfo.map((bird, index) => (
          <li key={index} className='card'>
            <h4>{bird.name}</h4>
            <h5>Price :${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />
            <button>Adopt</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cards;