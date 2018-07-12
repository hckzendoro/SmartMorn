export default (app) => {
	const server = require('http').createServer(app);  
	const io = require('socket.io')(server);
	server.listen(8082, function(){
		console.log('listening on *:8082');
	});
	io.on('connection', function(client) {  
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
}