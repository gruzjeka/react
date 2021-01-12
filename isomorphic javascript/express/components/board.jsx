const React = require('react');
const ReactDOM = require('react-dom');
const request = require('axios');

const url = 'http://localhost:3000/messages';

class MessageList extends React.Component {
    render() {
        const messages = this.props.messages;
        if (!messages || !messages.length > 0) {
            return <p>No messages yet</p>;
        }

        return (
            <table className="table ">
                <caption>Messages</caption>
                <thead>
                    <tr>
                        <th className="span2">Name</th>
                        <th className="span10">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message) => {
                        return (
                            <tr key={message._id}>
                                <td className="span2">{message.name}</td>
                                <td className="span10">{message.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

class NewMessage extends React.Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.keyup = this.keyup.bind(this);
    }

    addMessage() {
        let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        let message = ReactDOM.findDOMNode(this.refs.message).value.trim();

        if (!name || !message) {
            return console.error('Name and message cannot be empty')
        }

        this.props.addMessage({
            name: name,
            message: message
        });

        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.message).value = '';
    }

    keyup(e) {
        if (e.keyCode == 13) return this.addMessage()
    }

    render() {
        return (
            <div className="row-fluid" id="new-message">
                <div className="span12">
                    <form className="well form-inline" onKeyUp={this.keyup} onSubmit={this.addMessage}>
                        <input
                            type="text" name="username"
                            className="input-small" placeholder="Azat" ref="name" />
                        <input
                            type="text" name="message" className="input-small"
                            placeholder="Hello!" ref="message" />
                        <a id="send" className="btn btn-primary"
                            onClick={this.addMessage}>POST</a>
                    </form>
                </div>
            </div>
        )
    }
}

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        if (this.props.messages) {
            this.state = { messages: this.props.messages };
        }
    }

    componentDidMount() {
        request.get(url)
            .then(response => response.data)
            .then(messages => {
                if (!messages || !messages.length) {
                    return;
                }

                this.setState({ messages: messages });
            });
    }

    addMessage(message) {
        let messages = this.state.messages;
        request.post(url, message)
            .then(result => result.data)
            .then((data) => {
                if (!data) {
                    return console.error('Failed to save')
                }

                messages.unshift(data);
                this.setState({ messages: messages });
            });
    }

    render() {
        return (
            <div>
                <NewMessage addMessage={this.addMessage} />
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

module.exports = MessageBoard;