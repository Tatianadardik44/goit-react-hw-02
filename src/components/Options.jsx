const Options = ({updateFeedback, hendleReset, totalFeedback}) => {
    return (
        <div>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback ? <button onClick={hendleReset}>Reset</button>: null}
        </div>
    )
}
export default Options