import HandleAdoptAndTotal from "../App";

const Cards = ({ bird, HandleAdoptAndTotal }) => {

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
            <button onClick={() => HandleAdoptAndTotal(birds.id)}>ADOPT</button>
            </li>
          ))} 
        </ul>
      </div>
    </div> 
  );
};

export default Cards; 