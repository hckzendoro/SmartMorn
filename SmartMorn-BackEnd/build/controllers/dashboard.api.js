'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _database = require('../utils/database');

var _database2 = _interopRequireDefault(_database);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bestTemp = 20;

Array.prototype.groupBy = function (prop) {
  return this.reduce(function (groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};
var dashboard = exports.dashboard = function dashboard(req, res) {
  var token = req.headers['x-access-token'];
  try {
    var user = _jsonwebtoken2.default.verify(token, 'SuperHeroLOL');
  } catch (error) {
    return res.json({
      error: true,
      message: 'Not allow'
    });
  }

  (0, _database2.default)('SELECT * FROM `config` WHERE `userID` = ?', [user.userID], function (returnDataConfig) {
    (0, _database2.default)('SELECT *,UNIX_TIMESTAMP(time) AS time_unix FROM `sensordata`', [], function (returnData) {

      var result = _lodash2.default.countBy(returnData, 'temperature');
      var count = 0;
      Object.keys(result).forEach(function (ele) {
        count += result[ele];
      });
      var temp = {
        perfect: 0,
        hot: 0,
        cold: 0
      };

      // cal percentage 
      Object.keys(result).forEach(function (ele) {
        if (ele >= 20 && ele <= 27) {
          temp.perfect += result[ele] / count * 100;
        } else if (ele > 27) {
          temp.hot += result[ele] / count * 100;
        } else if (ele < 20) {
          temp.cold += result[ele] / count * 100;
        }
      });
      var date = new Date(Date.now());
      date = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ':' + date.getMinutes() + ' ' + (date.getHours() >= 12 ? "PM" : "AM");
      res.json({
        error: false,
        time: date,
        alarm: (0, _moment2.default)(returnDataConfig[0].alarm).format('MM/DD/YYYY h:mm'),
        tempPie: {
          labels: ['Too Hot', 'Too Cold', 'Perfect'],
          datasets: [{
            data: [temp.hot, temp.cold, temp.perfect],
            backgroundColor: ['#f90230', '#00a1ff', '#4caf50'],
            hoverBackgroundColor: ['#f90230', '#00a1ff', '#4caf50']
          }]
        }
      });
    });
  });
};
//# sourceMappingURL=dashboard.api.js.map