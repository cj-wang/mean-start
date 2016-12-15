import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as logger from 'morgan';

// import index from './routes/index';
// import users from './routes/users';
import api from './routes/api';

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
app.use('/api', api);

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