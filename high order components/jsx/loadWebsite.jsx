const LoadWebsite = (Component) => {
  class _LoadWebSite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        label: "Run",
        handleClick: this.handleClick.bind(this),
      };
    }

    getUrl() {
      return "https://facebook.github.io/react/docs/top-level-api.html";
    }

    handleClick(event) {
      document.getElementById("frame").src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      return <Component {...this.props} {...this.state} />;
    }
  }

  _LoadWebSite.displayName = "HighOrderComponent";

  return _LoadWebSite;
};
