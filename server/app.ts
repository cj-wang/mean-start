import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as logger from 'morgan';
import * as mongoose from 'mongoose';

// import index from './routes/index';
// import users from './routes/users';

const app: express.Express = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// routes
const routeModules = require('require-all')({
  dirname: __dirname + '/routes',
  filter: (filename: string) => {
    filename = filename.toLowerCase();
    if ((filename.endsWith('.ts') && !filename.endsWith('.spec.ts'))
      || (filename.endsWith('.js') && !filename.endsWith('.spec.js'))) {
      return filename.substr(0, filename.length - 3);
    }
  },
  map: name => '/' + name
});
function resolve(root: string, modules): void {
  for (let name of Object.keys(modules)) {
    if (!name.startsWith('/')) {
      return;
    }
    const module = modules[name];
    if (module.default && module.default.route) {
      console.log(`Add router ${root + name}`);
      const router = module.default as express.Router;
      app.use(root, router);
    } else {
      resolve(root + name, module);
    }
  }
}
resolve('', routeModules);

// Default to main page, angular route takes over
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   var err = new Error('Not Found');
//   err['status'] = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {

//   app.use((error: any, req, res, next) => {
//     res.status(error['status'] || 500);
//     res.render('error', {
//       message: error.message,
//       error
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use((error: any, req, res, next) => {
//   res.status(error['status'] || 500);
//   res.render('error', {
//     message: error.message,
//     error: {}
//   });
//   return null;
// });

export default app;


// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected')
});
