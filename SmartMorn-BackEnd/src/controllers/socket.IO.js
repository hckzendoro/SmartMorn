import moment from 'moment';
import db from '../utils/database';
export default (app) => {
	const server = require('http').createServer(app);  
	const io = require('socket.io')(server);
	io.listen(8082, function(){
		console.log('listening on *:8082');
	});
	io.sockets.on('connection', function(client) {  
		console.log('Client connected...');
		client.emit('messages', 'Hello from server');
		client.on('connect', function(data) {
			console.log("Connected!");
		});
		client.on('messageType', function(data) {
			console.log(data);
			client.emit('messages', 'Hello from server');
		});
	});

	app.get('/api/v1/adjustment/on',(req,res) => {
		io.emit('messageType','adjustment_on');
		res.json({
			error: false,
			message: 'adjustment_on success'
		})
	})
	app.get('/api/v1/adjustment/off',(req,res) => {

		io.emit('messageType','adjustment_off');
		res.json({
			error: false,
			message: 'adjustment_off success'
		})
	});
	// app.get('/api/v1/alarm/on',(req,res) => {

	// 	io.emit('messageType','alarm_on');
	// 	res.json({
	// 		error: false,
	// 		message: 'alarm_on success'
	// 	})
	// })

	let time;
    const tmpFuc = () => {
		clearInterval(time)
		
		let date = moment().format('YYYY-MM-DD HH:mm:00');
		console.log(date);
		db('SELECT * FROM `config` WHERE `alarm` = ? and (alarm != activeAlarm)',[ 
			date
		],(returnData) => {
			if(returnData.length > 0) {
				db('UPDATE `config` SET `activeAlarm` = ? ',[ 
					returnData[0].alarm
				],(returnUpdate) => {
					console.log('start emit')
					io.emit('messageType','alarm_on');
					time =  setTimeout(tmpFuc,5000);
				});	
			} else {
				console.log('Skip');
				time =  setTimeout(tmpFuc,5000);
			}
		});
    }
    time = setTimeout(tmpFuc,10);
};
