export default function Score({scores}) {
    console.log(scores)
    
    return (
        <ul>
            {scores.map((score) => {
                return (
                    <li> Date: {score.date}: {score.score} </li>
                )
                
            })}
        </ul>
    )
}