import { Router } from 'express';

import test from './test';
import restUser from './rest-user';

const router = Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

test(router);
restUser(router);

export default router;
