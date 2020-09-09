const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);

class Content extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500" />
      </div>
    );
  }
}
