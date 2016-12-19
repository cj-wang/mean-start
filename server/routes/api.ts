import { Router } from 'express';

import test from './test';
import crud from './crud';

const router = Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

test(router);
crud(router);

export default router;
