import { useState } from "react";

const Cards = ({ birdsData, addToCart }) => {
  return (
    <div className="birds">
      <div>
        <ul>
          {birdsData.map((bird) => (
            <li className="card" key={bird.id} style={{ listStyle: "none" }}>
              <p> {bird.name}</p>

              <p>Price: ${bird.amount}</p>
              <img src={bird.img} alt={bird.name} />
              <button
                className="rainbow-button"
                onClick={() => addToCart(bird)}
              >
                ADOPT
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
