function Cart ({ cartItems, removeFromCartProp, totalCostProp, discountRateProp, bonusItems }) {
    // add removeFromCartProp fx parameter, and parameters that are variables that hold totalCost and discountRate. All this variable stuff will be in App function and used inside this function
    // Step 7: Added bonusItems to be used as prop on App.jsx, but before using it as a prop create conditional (wrap it as a function)
    // Step 7a: create callback fx to generate bonus items 
    const getBonusItemsToDisplay = () => {
      // making it a switch statement will probably make code longer bc gotta create statements that will be true for each case to put inside switch ()
      if (totalCostProp >= 1000) {
        return bonusItems;
      } else if (totalCostProp < 1000 && totalCostProp >= 500) {
        return bonusItems.slice(0, 3);
      } else if (totalCostProp < 500 && totalCostProp >= 300) {
        return bonusItems.slice(0, 2);
      } else if (totalCostProp < 300 && totalCostProp >= 100) {
        return [bonusItems[0]];
      } else {
        return [];
      }
    };
    // Determine the bonus items to display (created this variabe so output can be used to iterate through in .map fx in the return (to append and update on page))
    const displayedBonusItems = getBonusItemsToDisplay();
      return (
        <section className="cart">
          <h2>Cart</h2>
          <h5>Discount: {discountRateProp}%</h5>
          <h4>Total Cost: ${totalCostProp.toFixed(2)}</h4>
          <ol>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.amount.toFixed(2)}
                <button onClick={() => removeFromCartProp(item.id)}>Delete</button>
              </li>
            ))}
          </ol>
          {displayedBonusItems.length > 0 && (
            <div>
              <h3>Bonus Items</h3>
              <ul>
                {/* add conditional to check if array is not empty*/}
                {displayedBonusItems.map((bonus, index) => (
                  <li key={index}>{bonus}</li>
                ))}
              </ul>
            </div>
            )}
        </section>
      );
    }

    export default Cart;