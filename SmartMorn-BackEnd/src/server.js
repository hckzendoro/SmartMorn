import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sockerServer from './controllers/socket.IO';
import routes from './routes';
import cors from 'cors';

const app = express();
sockerServer(app);

app.use(cors({
	'origin': '*',
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false
  }));

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
