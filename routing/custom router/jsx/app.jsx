const React = require("react");
const ReactDOM = require("react-dom");
const Router = require("./router.jsx");

const mapping = {
  "#profile": (
    <h1>
      Profile <a href="#">Home</a>
    </h1>
  ),
  "#accounts": (
    <h1>
      Accounts <a href="#">Home</a>
    </h1>
  ),
  "*": (
    <div>
      Dashobard <br />
      <a href="#profile">Profile</a>
      <a href="#accounts">Accounts</a>
    </div>
  ),
};

ReactDOM.render(<Router mapping={mapping} />, document.getElementById("root"));
