'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _alarm = require('../controllers/alarm');

var _sleepSession = require('../controllers/sleepSession');

var _auth = require('../controllers/auth');

var _dashboard = require('../controllers/dashboard.api');

var router = (0, _express.Router)();

//router.get('/', auth);
router.post('/login', _auth.login);
router.post('/register', _auth.register);

router.post('/setalarm', _alarm.setalarm);
router.post('/setsleep', _sleepSession.setSleep);
router.get('/getallinfo', _dashboard.dashboard);
exports.default = router;
//# sourceMappingURL=users.js.map