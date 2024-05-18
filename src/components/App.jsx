import { useState } from 'react'

import './App.css'
import Options from './Options'
import Feedback from './Feedback'
import Notification from './Notification';


function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const updateFeedback = (feedbackType) => {
    setState({...state, [feedbackType]: state[feedbackType] + 1})
    
  };
  const hendleReset = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = state.good + state.neutral + state.bad;
  const positive = Math.round((state.good / totalFeedback) * 100);
  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} hendleReset={hendleReset}  /> 
        {totalFeedback ? <Feedback state={state} totalFeedback={  totalFeedback } positive={positive }/>:<Notification/>}
      </div>  
    
    </>
  )
}

export default App
