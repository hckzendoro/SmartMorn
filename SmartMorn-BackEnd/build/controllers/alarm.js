'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setalarm = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setalarm = exports.setalarm = function setalarm(req, res) {
    var date = req.body.date;
    var time = req.body.time;

    var token = req.headers['x-access-token'];

    try {
        var user = _jsonwebtoken2.default.verify(token, 'SuperHeroLOL');
    } catch (error) {
        return res.json({
            error: true,
            message: 'Not allow'
        });
    }

    (0, _database2.default)('SELECT * FROM `config` WHERE `userID` = ?', [user.userID], function (returnData) {
        if (returnData.length == 0) {
            (0, _database2.default)('INSERT INTO `config` SET ? ', {
                userID: user.userID,
                sleepSession: '0000-00-00 00:00:00',
                alarm: date + ' ' + time
            }, function (returnCheckExist) {
                res.json({
                    error: false,
                    message: 'Set alarm success'
                });
            });
        } else {
            (0, _database2.default)('UPDATE `config` SET `alarm` = ? WHERE `userID` = ?', [date + ' ' + time, user.userID], function (returnCheckExist) {
                res.json({
                    error: false,
                    message: 'Set alarm success'
                });
            });
        }
    });
};
//# sourceMappingURL=alarm.js.map