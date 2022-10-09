import { CounterType } from "./types";
import './style.css'

const Counter = ({ amount = 0, total}: CounterType): JSX.Element => {
    console.log(total)
    return (
    <div className="counter">
        <span>{amount} {(!!total && total > 0) && `de ${total}`}</span>
    </div>
)}

export default Counter;