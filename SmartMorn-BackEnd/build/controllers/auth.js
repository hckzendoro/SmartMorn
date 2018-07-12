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
    console.log(_database2.default);
    res.send('ok');
    // const token = jwt.sign({ foo: 'bar' },'123456',{ expiresIn: '1h' });
    //res.send(token);
};
//# sourceMappingURL=auth.js.map