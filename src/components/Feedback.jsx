const Feedback = ({state,  totalFeedback, positive}) => {
    return (
        <ul>
            <li>Good: {state.good }</li>
            <li>Neutral: {state.neutral}</li>
            <li>Bad: {state.bad}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:{positive}%</li>
        </ul>
    )
}
export default Feedback