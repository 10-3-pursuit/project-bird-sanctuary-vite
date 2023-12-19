import bonusItems from '../data/bonusItems'

const BonusItems = ({ number }) => {
    return (
        <ul>
            {number > 0 ? <span>Your order qualifies you for the following items:</span> : ''}
            {bonusItems.slice(0, number).map((bonus) => {
                return (
                    <li key={bonus}>{bonus}</li>
                )
            })}
        </ul>
    )
}

export default BonusItems