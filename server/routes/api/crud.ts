import { Router } from 'express';

const crudRouter = Router();

const models = require('require-all')({
  dirname: __dirname + '/../../models',
  filter: /^([^\.].*)\.(ts|js)$/
});

Object.keys(models).forEach((name) => {
  console.log(`Add REST ${name}`);
  const model = models[name].default;

  crudRouter.route('/' + name + 's')
    // C
    .post((req, res) => {
      const m = new model();
      Object.assign(m, req.body);
      m.save((err) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json(m);
        }
      });
    })
    // R
    .get((req, res) => {
      model.find((err, ms) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json(ms);
        }
      });
    });

  crudRouter.route('/' + name + 's/:_id')
    // R
    .get((req, res) => {
      model.findById(req.params._id, (err, m) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json(m);
        }
      });
    })
    // U
    .put((req, res) => {
      model.findById(req.params._id, (err, m) => {
        if (err) {
          res.json({ error: err });
          return;
        }
        Object.assign(m, req.body);
        m.save((errSave) => {
          if (errSave) {
            res.json({ error: errSave });
          } else {
            res.json(m);
          }
        });
      });
    })
    // D
    .delete((req, res) => {
      model.remove({
        _id: req.params._id
      }, (err) => {
        if (err) {
          res.json({ error: err });
        } else {
          return res.status(204).end();
        }
      });
    });

});

export default crudRouter;
