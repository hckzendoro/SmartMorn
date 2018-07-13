import { Router } from 'express';
import { login, register } from '../controllers/auth';
import { setalarm } from '../controllers/alarm';
import { setSleep } from '../controllers/sleepSession';
const router = Router();

//router.get('/', auth);
router.post('/login',login);
router.post('/register',register);

// router.get('/info',(req,res) => {
// 	res.send('info');
// });

router.post('/setalarm',setalarm);
router.post('/setsleep',setSleep);
export default router;