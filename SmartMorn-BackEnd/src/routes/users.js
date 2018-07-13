import { Router } from 'express';
import { login, register } from '../controllers/auth';
import { setalarm } from '../controllers/alarm';
import { setSleep } from '../controllers/sleepSession';
import { login, register} from '../controllers/auth';
import { graph, pie1, pie2} from '../controllers/dashboard.api'

const router = Router();

//router.get('/', auth);
router.post('/login',login);
router.post('/register',register);

router.get('/graph',graph);
router.get('/pie1',pie1);
router.get('/pie2',pie2);
// router.get('/info',(req,res) => {
// 	res.send('info');
// });

router.post('/setalarm',setalarm);
router.post('/setsleep',setSleep);
export default router;

