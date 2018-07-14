'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setSleep = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSleep = exports.setSleep = function setSleep(req, res) {
    var sleepTime = req.body.time;
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
                sleepTime: date + ' ' + time,
                alarm: '0000-00-00 00:00:00'
            }, function (returnCheckExist) {
                res.json({
                    error: false,
                    message: 'Set sleep session success'
                });
            });
        } else {
            (0, _database2.default)('UPDATE `config` SET `sleepTime` = ? WHERE `userID` = ?', [sleepTime + ':00', user.userID], function (returnCheckExist) {
                res.json({
                    error: false,
                    message: 'Set sleep session success'
                });
            });
        }
    });
};
//# sourceMappingURL=sleepSession.js.map