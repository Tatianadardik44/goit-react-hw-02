import { BiWinkSmile } from "react-icons/bi";
import { CgSmileNeutral } from "react-icons/cg";
import { CgSmileSad } from "react-icons/cg";
import css from "./Feedback.module.css"
const Feedback = ({ state, totalFeedback, positiveFeedback }) => {
    return (
        <ul>
            <li>Good: {state.good}   {state.good ? <BiWinkSmile className={css.good } />: null}   </li>
            <li>Neutral: {state.neutral} {state.neutral ? <CgSmileNeutral className={ css.neutral} />: null} </li>
            <li>Bad: {state.bad} {state.bad ? <CgSmileSad className={css.bad} />: null}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:{positiveFeedback }%</li>
        </ul>
    )
}
export default Feedback