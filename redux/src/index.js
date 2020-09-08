const React = require("react");
const { render } = require("react-dom");
const { Provider } = require("react-redux");
const { createStore } = require("redux");
const reducers = require("./reducers");
const routes = require("./routes");

module.exports = render(
  <Provider store={createStore(reducers)}>{routes}</Provider>,
  document.getElementById("root")
);
