import { useState } from "react";

const Cards = ({bird}) => {
  //set useState for adopt button to false, onclick will turn true 
  const [adopt, setAdopt ] = useState(false)

  function handleAdopt() {
    setAdopt(true)
    console.log("You clicked adopt button!")
  }

  return (
    <div>
      <div>
        <ul className="birds">
          {bird.map((birds) => (
            <li key={birds.id} className="card">
            <h2>{birds.name}</h2>
            <h4>$ {birds.amount}</h4>
            <img src={birds.img} alt="image of a bird"/>
            <br/>
            <button onClick={() => handleAdopt()}>ADOPT</button>
            </li>
          ))} 
        </ul>
      </div>
    </div> 
  );
};

export default Cards;
