const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Email = React.createFactory(require('./email.js'));

const emailString = ReactDOMServer.renderToString(Email({ text: "Hello Server Side Rendering!" }));
console.log(emailString);

const emailStaticMarkup = ReactDOMServer.renderToStaticMarkup(Email({ text: "Hello Server Side Rendering!" }));
console.log(emailStaticMarkup);