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

router.get('/graph', _dashboard.graph);
router.get('/pie1', _dashboard.pie1);
router.get('/pie2', _dashboard.pie2);
// router.get('/info',(req,res) => {
// 	res.send('info');
// });

router.post('/setalarm', _alarm.setalarm);
router.post('/setsleep', _sleepSession.setSleep);
exports.default = router;
//# sourceMappingURL=users.js.map