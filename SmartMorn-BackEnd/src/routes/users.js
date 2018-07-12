import { Router } from 'express';
import { login, register } from '../controllers/auth';

const router = Router();

//router.get('/', auth);
router.post('/login',login);
router.post('/register',register);
// router.get('/info',(req,res) => {
// 	res.send('info');
// });



export default router;