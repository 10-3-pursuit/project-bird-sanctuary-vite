import React from 'react';

export default function Cards({addToCart, BirdInfo}) {
  return (
    <div className="birds">
        {BirdInfo.map((bird, index) => (
          <li key={index} className='card'>
            <h4>{bird.name}</h4>
            <h5>Price :${bird.amount}</h5>
            <img src={bird.img} alt={bird.name} />
            <button className="adopt-button" onClick={() => addToCart(bird.name)}>Adopt</button>
          </li>
        ))}
    </div>
  );
};