'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('../controllers/auth');

var router = (0, _express.Router)();

//router.get('/', auth);
router.post('/login', _auth.login);
// router.get('/info',(req,res) => {
// 	res.send('info');
// });


exports.default = router;
//# sourceMappingURL=users.js.map