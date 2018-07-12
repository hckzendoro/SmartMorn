import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './middlewares/promise.middleware';
import reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// let middlewares;

// if (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production') {
// 	middlewares = composeWithDevTools(
// 		applyMiddleware(promiseMiddleware),
// 		applyMiddleware(thunkMiddleware,logger)
        
// 	);
// } else {
// 	middlewares = compose(
// 		applyMiddleware(promiseMiddleware),
// 		applyMiddleware(thunkMiddleware),
		
// 	);
// }
//export default initialState => createStore(reducers,initialState,middlewares);

export default initialState => createStore(
	reducers, 
	initialState, 
	composeWithDevTools(
	applyMiddleware(
		promiseMiddleware,
		thunkMiddleware,
		logger
	)
))
