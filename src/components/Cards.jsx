import birdData from "../data/birds";
import Card from "./Card";


const Cards = ({addToCart} ) => {
  
  

  return (
    <div className="birds">
     
       {birdData.map((bird) => <Card key= {bird.id} bird = {bird} addToCart={addToCart}/>)}
    </div>
  );
};

export default Cards;
