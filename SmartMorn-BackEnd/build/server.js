'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _socket = require('./controllers/socket.IO');

var _socket2 = _interopRequireDefault(_socket);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('events').EventEmitter.defaultMaxListeners = 0;

var app = (0, _express2.default)();

app.use((0, _cors2.default)({
	'origin': 'http://172.20.10.6:3000',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false,
	'allowedHeaders': ['X-Requested-With', 'x-access-token', 'Content-Type'],
	'credentials': true,
	'maxAge': 5
}));
var HeadeMiddleware = function HeadeMiddleware(req, res, next) {
	res.header("X-Frame-Options", "deny");
	next();
};
app.use(HeadeMiddleware);
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use((0, _cookieParser2.default)());
app.use((0, _expressSession2.default)({
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET || 'SESSION_SECRET',
	cookie: { maxAge: 60000 }
}));

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static('public'));

app.use('/', _routes2.default);

app.listen(8081, function () {
	console.log('listen on port : 8081');
});

(0, _socket2.default)(app);
//# sourceMappingURL=server.js.map