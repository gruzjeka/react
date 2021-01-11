export default function Timer(props) {
    if (props.timeLeft === null || props.timeLeft === 0) {
        return <div></div>
    }
    return <h2>Time left: {props.timeLeft}</h2>;
}