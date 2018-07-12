import { Router } from 'express';
import { login } from '../controllers/auth';

const router = Router();

//router.get('/', auth);
router.post('/login',login);
// router.get('/info',(req,res) => {
// 	res.send('info');
// });



export default router;