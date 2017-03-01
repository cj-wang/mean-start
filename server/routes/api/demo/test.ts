import { Router, Request, Response } from 'express';

const router = Router();
export default router;

router.get('/test', testHandler);

export function testHandler(req: Request, res: Response) {
  res.send('Test API works');
};
