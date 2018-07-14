'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = exports.login = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    (0, _database2.default)('SELECT * FROM `userinfo` WHERE `username` = ? and `password` = ?', [username, (0, _md2.default)(password)], function (returnData) {

        if (returnData.length > 0) {
            var token = _jsonwebtoken2.default.sign({ userID: returnData[0].id }, 'SuperHeroLOL', { expiresIn: '24h' });
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
};

var register = exports.register = function register(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var gender = req.body.gender;
    var birthDay = req.body.birthday;

    (0, _database2.default)('SELECT * FROM `userinfo` WHERE `username` = ? ', [username], function (returnCheckExist) {
        if (returnCheckExist.length == 0) {

            (0, _database2.default)("INSERT INTO `userinfo` SET ?", {
                username: username,
                password: (0, _md2.default)(password),
                birthday: birthDay,
                gender: gender
            }, function (error, returnData) {
                res.json({
                    error: false,
                    message: 'Register Success'
                });
            });
        } else {
            res.json({
                error: true,
                message: 'Error: Username Already Exist!'
            });
        }
    });
};
//# sourceMappingURL=auth.js.map