import React from 'react';
import Modal from "./Modal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.isModal = false;
    this.previousChildren = null;
  }

  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state && nextProps.location.state.modal);
    if (this.isModal && nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children;
    }
  }

  render() {
    return (<div className="well">
      <h1>Book Store</h1>
      <div>
        {(this.isModal ? this.previousChildren : this.props.children)}
        {(this.isModal ? <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>{this.props.children}</Modal> : "")}
      </div>
    </div>);
  }
}
