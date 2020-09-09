class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

class Link extends React.Component {
  render() {
    return (
      <a onClick={this.props.handleClick} href="#">
        {this.props.label}
      </a>
    );
  }
}
