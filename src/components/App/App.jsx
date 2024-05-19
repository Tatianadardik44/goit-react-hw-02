import { useState, useEffect } from 'react'

import css from './App.module.css'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification';
import Description from '../Description/Description';

  const createLocalState = () => {
    const localState = localStorage.getItem('key');
   
    return localState ? JSON.parse(localState) : 0
  }
function App() {
  const [state, setState] = useState(createLocalState())
  useEffect(() => {
   localStorage.setItem('key', JSON.stringify(state)

  )}, [state])
  
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
      <div className={css.mainBox}>
        <Description />
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} hendleReset={hendleReset}  /> 
        {totalFeedback ? <Feedback state={state} totalFeedback={  totalFeedback } positiveFeedback ={positiveFeedback  }/>:<Notification/>}
      </div>  
    
    </>
  )
}

export default App
