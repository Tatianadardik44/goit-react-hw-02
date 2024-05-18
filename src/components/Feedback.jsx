const Feedback = ({state,  totalFeedback, positiveFeedback }) => {
    return (
        <ul>
            <li>Good: {state.good }</li>
            <li>Neutral: {state.neutral}</li>
            <li>Bad: {state.bad}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:{positiveFeedback }%</li>
        </ul>
    )
}
export default Feedback