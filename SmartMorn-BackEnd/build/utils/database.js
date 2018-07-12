'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = _mysql2.default.createPool({
    connectionLimit: 100,
    host: '127.0.0.1',
    user: 'root',
    password: '0852930826Aq',
    database: 'vue_cloud',
    debug: false
});

exports.default = function (command) {
    var parameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var returnVal = arguments[2];

    pool.getConnection(function (error, connection) {
        if (error) return {
            'code': 100,
            'status': 'Error in connection database'
        };

        connection.query(command, parameter, function (err, resData) {
            connection.release();
            return returnVal(resData);
        });

        connection.on('error', function (err) {
            return {
                'code': 100,
                'status': 'Error in connection database'
            };
        });
    });
};
//# sourceMappingURL=database.js.map