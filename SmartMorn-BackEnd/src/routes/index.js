import { Router } from 'express';

const router = Router();


import users from './users';

// Route group start here!

router.use('/api/v1/users', users);



export default router;