import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sockerServer from './controllers/socket.IO';
import routes from './routes';
import cors from 'cors';

require('events').EventEmitter.defaultMaxListeners = 0;

const app = express();

app.use(cors({
	'origin': 'http://172.20.10.6:3000',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false,
	'allowedHeaders': ['X-Requested-With','x-access-token','Content-Type'],
	'credentials': true,
	'maxAge': 5
}));
const HeadeMiddleware = (req,res,next) => {
	res.header("X-Frame-Options", "deny");
	next()
}
app.use(HeadeMiddleware);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.use(cookieParser());
app.use(session({
  	resave: true,
  	saveUninitialized: true,
  	secret: process.env.SESSION_SECRET || 'SESSION_SECRET',
  	cookie: { maxAge: 60000 }
}));


app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', routes);

app.listen(8081,() => {
	console.log('listen on port : 8081')
});

sockerServer(app);

