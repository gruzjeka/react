import { Component } from "react";
import Button from "./button";
import Timer from "./timer";

export default class TimerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
            timer: null
        };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1;
            if (timeLeft < 0) clearInterval(timer);
            this.setState({ timeLeft });
        }, 1000);

        this.setState({ timeLeft, timer });
    }

    render() {
        return <div className="row-fluid">
            <h2>Timer</h2>
            <div className="btn-group" role="group">
                <Button time={5} startTimer={this.startTimer} />
                <Button time={15} startTimer={this.startTimer} />
                <Button time={30} startTimer={this.startTimer} />
            </div>
            <Timer timeLeft={this.state.timeLeft} />
        </div>;
    }
}