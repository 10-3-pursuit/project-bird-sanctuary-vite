import React from 'react';
import BirdInfo from '../data/birds';

export default function Cards({addToCart}) {
  return (
    <div className="birds">
        {BirdInfo.map((bird, index) => (
          <li key={index} className='card'>
            <h4>{bird.name}</h4>
            <h5>Price :${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />
            <button onClick={() => addToCart(bird.name)}>Adopt</button>
          </li>
        ))}
    </div>
  );
};