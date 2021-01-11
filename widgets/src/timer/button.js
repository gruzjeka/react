export default function Button(props) {
    const startTimer = (e) => { props.startTimer(props.time) };
    return <button type="button" className="btn-default btn" onClick={startTimer}>{props.time} seconds</button>
}