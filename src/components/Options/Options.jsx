import css from './Options.module.css'
const Options = ({ updateFeedback, hendleReset, totalFeedback }) => {
    return (
        <div>
            <button className={css.btn} onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.btn}  onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback ? <button className={css.btn} onClick={hendleReset}>Reset</button>: null}
        </div>
    )
}
export default Options