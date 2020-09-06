const React = require("react");

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: window.location.hash,
    };
    this.updateHash = this.updateHash.bind(this);
  }

  updateHash(event) {
    this.setState({ hash: window.location.hash });
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.updateHash, false);
  }

  componentWillMount() {
    window.removeEventListener("hashchange", this.updateHash, false);
  }

  render() {
    console.log(this.state);
    if (this.props.mapping[this.state.hash])
      return this.props.mapping[this.state.hash];
    else return this.props.mapping["*"];
  }
}

module.exports = Router;
