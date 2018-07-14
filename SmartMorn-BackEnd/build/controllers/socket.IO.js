'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
	var server = require('http').createServer(app);
	var io = require('socket.io')(server);
	io.listen(8082, function () {
		console.log('listening on *:8082');
	});
	io.sockets.on('connection', function (client) {
		console.log('Client connected...');
		client.emit('messages', 'Hello from server');
		client.on('connect', function (data) {
			console.log("Connected!");
		});
		client.on('messageType', function (data) {
			console.log(data);
			client.emit('messages', 'Hello from server');
		});
	});

	app.get('/api/v1/adjustment/on', function (req, res) {
		io.emit('messageType', 'adjustment_on');
		res.json({
			error: false,
			message: 'adjustment_on success'
		});
	});
	app.get('/api/v1/adjustment/off', function (req, res) {

		io.emit('messageType', 'adjustment_off');
		res.json({
			error: false,
			message: 'adjustment_off success'
		});
	});
	// app.get('/api/v1/alarm/on',(req,res) => {

	// 	io.emit('messageType','alarm_on');
	// 	res.json({
	// 		error: false,
	// 		message: 'alarm_on success'
	// 	})
	// })

	var time = void 0;
	var tmpFuc = function tmpFuc() {
		clearInterval(time);

		var date = (0, _moment2.default)().format('YYYY-MM-DD HH:mm:00');
		console.log(date);
		(0, _database2.default)('SELECT * FROM `config` WHERE `alarm` = ? and (alarm != activeAlarm)', [date], function (returnData) {
			if (returnData.length > 0) {
				(0, _database2.default)('UPDATE `config` SET `activeAlarm` = ? ', [returnData[0].alarm], function (returnUpdate) {
					console.log('start emit');
					io.emit('messageType', 'alarm_on');
					time = setTimeout(tmpFuc, 5000);
				});
			} else {
				console.log('Skip');
				time = setTimeout(tmpFuc, 5000);
			}
		});
	};
	time = setTimeout(tmpFuc, 10);
};
//# sourceMappingURL=socket.IO.js.map