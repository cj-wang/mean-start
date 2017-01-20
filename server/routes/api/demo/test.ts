import { Router } from 'express';

const testRouter = Router();

testRouter.get('/test', (req, res) => {
  res.send('Test API works');
});

export default testRouter;
