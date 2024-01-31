import Score from "./Score"

export default function Learner({learners}) {

    // console.log(learners[0].scores)
    return (
        <>
        {
        learners.map((learner)=> {
            return (
            <div key={learner.name}>
                <h1>{learner.name}</h1>
                <p>{learner.bio}</p>
                <Score  scores={learner.scores}/>
                </div>)
            
        })
        }
        </>
    )
}