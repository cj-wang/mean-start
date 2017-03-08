import { Router, Request, Response } from 'express';
import axios from 'axios';

export default Router()
  .get('/posts', getPosts);

export function getPosts(req: Request, res: Response) {
  const API = 'https://jsonplaceholder.typicode.com';
  return axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error' });
    });
};
