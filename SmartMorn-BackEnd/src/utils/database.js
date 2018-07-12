import mysql from 'mysql';
const pool = mysql.createPool({
    connectionLimit: 100,
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    database: 'smartPillow',
    debug: false
});

export default (command, parameter = null, returnVal) => {

    pool.getConnection( (error, connection) => {
        if(error)
            return {
                'code' : 100,
                'status' : 'Error in connection database'
            };

        connection.query(command, parameter, (err, resData) => {
            connection.release()
            return returnVal(resData)
        })

        connection.on('error', (err) => {
            return {
                'code': 100, 
                'status': 'Error in connection database'
            };
        })

    })
}
