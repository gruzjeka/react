const React = require("react");
const ReactDOM = require("react-dom");

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle(event) {
    console.log(ReactDOM.findDOMNode(this.refs.emailAddress).value);
    console.log(ReactDOM.findDOMNode(this.refs.comments).value);
  }

  render() {
    this.propmpt = "Please enter your email";
    return (
      <div className="well">
        <p>{this.propmpt}</p>
        <div className="form-group">
          Email:
          <input
            ref="emailAddress"
            className="form-control"
            type="text"
            placeholder="gruzjeka@gmail.com"
          />
        </div>
        <div className="form-group">
          Comments:
          <textarea
            ref="comments"
            className="form-control"
            type="text"
            placeholder="Type your thoughts"
          />
        </div>
        <div className="form-group">
          <a className="btn btn-primary" onClick={this.submitHandle}>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

module.exports = Content;
