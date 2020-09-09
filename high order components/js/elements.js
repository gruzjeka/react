class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn btn-primary", onClick: this.props.handleClick },
      this.props.label
    );
  }
}

class Link extends React.Component {
  render() {
    return React.createElement(
      "a",
      { onClick: this.props.handleClick, href: "#" },
      this.props.label
    );
  }
}