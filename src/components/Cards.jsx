import Card from "./Card";
import birds from '../data/birds'

const Cards = ({handleAddToCart}) => {              

  return (
    <div className="birds">
        {birds.map(bird=> {
          return (
              <Card  key={bird.id} bird={bird} handleAddToCart={handleAddToCart}/>
            )}
          )}
      </div>
  );
};

export default Cards;
