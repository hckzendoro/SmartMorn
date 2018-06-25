'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = (0, _express.Router)();

router.get('/', function (req, res) {
  res.send('user');
});
router.get('/info', function (req, res) {
  res.send('info');
});

exports.default = router;
//# sourceMappingURL=users.js.map