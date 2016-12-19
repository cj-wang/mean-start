import { Router } from 'express';

import User from '../models/user';

export default function (router: Router) {

  router.route('/users')
    // C
    .post((req, res) => {
      var user = new User();
      user.name = req.body.name;
      user.save((err) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json(user);
        }
      });
    })
    // R
    .get((req, res) => {
      User.find((err, users) => {
        console.log(users)
        if (err) {
          res.json({ error: err });
        } else {
          res.json(users);
        }
      });
    });

  router.route('/users/:user_id')
    // R
    .get((req, res) => {
      User.findById(req.params.user_id, (err, user) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json(user);
        }
      });
    })
    // U
    .put((req, res) => {
      User.findById(req.params.user_id, (err, user) => {
        if (err) {
          res.json({ error: err });
          return;
        }
        user.name = req.body.name;
        user.save((err) => {
          if (err) {
            res.json({ error: err });
          } else {
            res.json(user);
          }
        });
      });
    })
    // D
    .delete((req, res) => {
      User.remove({
        _id: req.params.user_id
      }, (err) => {
        if (err) {
          res.json({ error: err });
        }
      });
    });

};
