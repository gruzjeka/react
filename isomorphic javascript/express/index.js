require('babel-register')({
    presets: ['react']
});

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    validator = require('express-validator'),
    logger = require('morgan'),
    errorHandler = require('errorhandler'),
    compression = require('compression'),
    ReactDOMServer = require('react-dom/server'),
    React = require('react');


const Header = React.createFactory(require('./components/header.jsx')),
    Footer = React.createFactory(require('./components/footer.jsx')),
    MessageBoard = React.createFactory(require('./components/board.jsx'));

const messages = [{ name: "name 1", messahe: "message 1" }, { name: "name 2", messahe: "message 2" }, { name: "name 3", messahe: "message 3" }];

app.set('view engine', 'hbs');

app.use(compression());
app.use(logger('dev'));
app.use(errorHandler())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());
app.use(express.static('public'));

app.use((req, res, next) => {
    req.messages = messages;
    return next();
});

app.get('/messages', (req, res, next) => {
    return res.json(messages);
});

app.post('/messages', (req, res, next) => {
    console.log(req.body)
    req.checkBody('message', 'Invalid message in body').notEmpty()
    req.checkBody('name', 'Invalid name in body').notEmpty()
    let newMessage = {
        message: req.body.message,
        name: req.body.name
    }
    let errors = req.validationErrors()
    if (errors) return next(errors)
    const message = messages.unshift(newMessage);
    return res.json(message);
})

app.get('/', (req, res, next) => {
    res.render('index', {
        header: ReactDOMServer.renderToString(Header()),
        footer: ReactDOMServer.renderToString(Footer()),
        messageBoard: ReactDOMServer.renderToString(MessageBoard({ messages: messages })),
        props: '<script type="text/javascript">var messages=' + JSON.stringify(messages) + '</script>'
        // props: '<script type="text/javascript">var messages='+JSON.stringify({})+'</script>'
        // messageBoard: ReactDOMServer.renderToString(MessageBoard({messages: [{_id:1, name: 'azat', message: 'hey'}]}))
    });
})

app.listen(3000);