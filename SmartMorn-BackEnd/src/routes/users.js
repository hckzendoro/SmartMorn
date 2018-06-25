import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
 	res.send('user');
});
router.get('/info',(req,res) => {
	res.send('info');
});



export default router;