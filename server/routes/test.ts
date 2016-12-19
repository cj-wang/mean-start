import { Router } from 'express';
import axios from 'axios';

export default function (router: Router) {
  router.get('/test', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    // declare axios for making http requests
    const API = 'https://jsonplaceholder.typicode.com';
    axios.get(`${API}/posts`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
  });
};
