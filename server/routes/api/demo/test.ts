import { Router, Request, Response } from 'express';

export default Router()
  .get('/test', testHandler);

export function testHandler(req: Request, res: Response) {
  res.send('Test API works');
};
