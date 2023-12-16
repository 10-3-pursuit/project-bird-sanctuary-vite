import { useState } from 'react'
import bonusItems from '../data/bonusItems'

const Bonuses = ({total}) => {
  const [bonuses, setBonuses] = useState(bonusItems)

  const addBonuses = () => {
    const copiedBonuses = [...bonuses]
    
    switch (true) {
      case (total < 100):
        null
        break;
      case (total < 300):
        copiedBonuses[0]
        break;
      case (total < 500):
        `${copiedBonuses[0]} ${copiedBonuses[1]}`
        break;
      case (total < 1000):
        `${copiedBonuses[0]} ${copiedBonuses[1]} ${copiedBonuses[2]}`
        break
      default:
        `${copiedBonuses[0]} ${copiedBonuses[1]} ${copiedBonuses[2]} ${copiedBonuses[2]}`
    }
  }

  return (
    {addBonuses}
  )
}

export default Bonuses