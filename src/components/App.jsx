import { useState, useEffect } from 'react'

import './App.css'
import Options from './Options'
import Feedback from './Feedback'
import Notification from './Notification';

  const createLocalState = (key) => {
    const localState = localStorage.getItem(key);
    return localState ? JSON.parse(localState) : 0
  }
function App() {
  const [state, setState] = useState({
     good: createLocalState('good'),
     neutral: createLocalState('neutral'),
     bad: createLocalState('bad')
  })
  useEffect(() => {
   localStorage.setItem('good', JSON.stringify(state.good));
    localStorage.setItem('neutral', JSON.stringify(state.neutral));
    localStorage.setItem('bad', JSON.stringify(state.bad));
  }, [state])
  
  const updateFeedback = (feedbackType) => {
    setState({...state, [feedbackType]: state[feedbackType] + 1})
    
  };
  const hendleReset = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback  = Math.round((state.good / totalFeedback) * 100);
  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} hendleReset={hendleReset}  /> 
        {totalFeedback ? <Feedback state={state} totalFeedback={  totalFeedback } positiveFeedback ={positiveFeedback  }/>:<Notification/>}
      </div>  
    
    </>
  )
}

export default App
