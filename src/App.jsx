import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import learnerData from './assets/data/learnerData'
import Learner from './assets/components/Learner'

function App() {
  
  const [learners, setLearnerData] = useState(learnerData);

  return (
    <>
      <Learner learners={learners} />
    </>
  )
}

export default App
