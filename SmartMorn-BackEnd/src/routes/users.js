import { Router } from 'express';
import { setalarm } from '../controllers/alarm';
import { setSleep } from '../controllers/sleepSession';
import { login, register} from '../controllers/auth';
import { dashboard } from '../controllers/dashboard.api'
const router = Router();

//router.get('/', auth);
router.post('/login',login);
router.post('/register',register);


router.post('/setalarm',setalarm);
router.post('/setsleep',setSleep);
router.get('/getallinfo',dashboard);
export default router;

