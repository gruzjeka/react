import React, { Suspense } from "react";
const Header = React.lazy(() => import('./Header'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComponent: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({
      loadComponent: true
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loadComponent ?
          <Suspense fallback={<div>Loading...</div>}>
            <Header title="Hello!" />
            <Header title="World!" />
          </Suspense> : null}
        <button onClick={this.clickHandler}>Click to load lazy component</button>
      </div>
    );
  }
}