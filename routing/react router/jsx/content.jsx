const React = require("react");
const PropTypes = require("prop-types");
const { Link } = require("react-router");

function Content(props) {
  return (
    <div>
      <h1>Node.University</h1>
      <div className="navbar navbar-default">
        <ul className="nav nav-pills navbar-nav ">
          <li className={props.history.isActive("/about") ? "active" : ""}>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li className={props.history.isActive("/posts") ? "active" : ""}>
            <Link to="/posts" activeClassName="active">
              Blog
            </Link>
          </li>
          <li className={props.history.isActive("/contact") ? "active" : ""}>
            <Link to="/contact" activeClassName="active">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" activeClassName="active">
              Login
            </Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}

module.exports = Content;
