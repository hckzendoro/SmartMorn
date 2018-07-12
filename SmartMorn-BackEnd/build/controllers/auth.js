'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(req, res) {
    (0, _database2.default)('SELECT * FROM `users` WHERE `username` = ? and `password` = ?', [req.username, req.password], function (returnData) {
        if (returnData.length > 0) {
            var token = _jsonwebtoken2.default.sign({ userID: returnData[0].id }, '123456', { expiresIn: '24h' });
            res.json({
                error: false,
                message: 'success',
                token: token
            });
        } else {
            res.json({
                error: true,
                message: 'Error: Username Or Password Incorrect!'
            });
        }
    });

    // const token = jwt.sign({ foo: 'bar' },'123456',{ expiresIn: '1h' });
    //res.send(token);
};
//# sourceMappingURL=auth.js.map