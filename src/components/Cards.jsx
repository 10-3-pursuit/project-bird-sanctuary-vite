// const Cards = () => {
//   return (
//     <div className="birds">
//       <div className="cards">
//         <h1>Card Component</h1>
//       </div>
//     </div>
//   );
// };

// export default Cards;

function Cards ({ birdData, addToCartProp }) { // name of prop is addToCart
    return (
      <section className='birds'>
        {birdData.map((bird) => (
          <div key={bird.id} className="card">
            <h3>{bird.name}</h3>
            <img src={bird.img} alt={bird.name} />
            <p>${bird.amount.toFixed(2)}</p>
            <button onClick={() => addToCartProp(bird)}>Adopt</button>
          </div>
        ))}
      </section>
    );
  }
export default Cards;
