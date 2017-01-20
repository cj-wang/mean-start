# MEAN Start

**Angular2 + Angular-CLI + Express + Mongoose + Socket.IO. All in TypeScript.** 

[DEMO (AWS EB)](http://node-express-env.upk8qnnc69.us-west-2.elasticbeanstalk.com)

[DEMO (GAE)](https://mean-start-cj-wang.appspot.com)

[DEMO (Heroku)](https://still-everglades-27346.herokuapp.com)

## Prerequisites

* [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Install global dependencies:
```bash
npm install -g typescript
npm install -g angular-cli
```

## Create a new project based on the MEAN Start

Clone this repo into new project folder (e.g., `my-proj`):
```bash
git clone https://github.com/cj-wang/mean-start my-proj
cd my-proj
```

Discard everything "git-like" by deleting the `.git` folder:
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*:
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

Install the npm packages described in the `package.json`:
```bash
npm install
```

## Development server
Start the dev server:
```bash
npm run dev
```

Navigate to [http://localhost:4200/](http://localhost:4200/) for the app.
Shut it down manually with `Ctrl-C`.

The `npm run dev` script starts 2 servers concurrently:

* **angular-cli dev server** - starts at `http://localhost:4200/`, serving the `angular` app.
The `angular` app will automatically reload if you change any of the client source files.

* **express server** - starts at `http://localhost:3000/`, serving the REST APIs.
The `express` server will be automatically restarted by `nodemon` if you change any of the server source files.

The `angular-cli` dev server is configured to proxy all API calls to `http://localhost:4200/api` to go to the `express` server `http://localhost:3000/api`, 
so that the whole app is available at [http://localhost:4200/](http://localhost:4200/).

You're ready to write your application.

## Develop

### Model class

Add `mongoose` model classes in `server/models/` directory, e.g. `server/models/user.ts`:
```TypeScript
import * as mongoose from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  name: string;
};

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String
});

interface IUserModel extends IUser, mongoose.Document { }

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
```

Model classes in `server/models/` directory are exposed as REST APIs by default.
E.g. with the `User` model added, below REST APIs are created automatically:
* POST    /api/users           - Create a User
* GET     /api/users           - Get all the users
* GET     /api/users/:user_id  - Get a single user
* PUT     /api/users/:user_id  - Update a user with new info
* DELETE  /api/users/:user_id  - Delete a user

>TODO: Role-based access control required.

### Custom API

Add API modules in `server/routes/api/` directory, e.g. `server/routes/api/demo/test.ts`:
```TypeScript
import { Router } from 'express';

const testRouter = Router();

testRouter.get('/test', (req, res) => {
  res.send('Test API works');
});

export default testRouter;
```

All the API modules must have a default export of type `express.Router`.
They will be imported by `app.ts` and be added to the `express` app automatically.
The root of the Routers correspond to the sub directories starting from `api/`, so the path of above API is `/api/demo/test`.

>TODO: Role-based access control required.

### Socket.IO

Add Socket.IO modules in `server/socket.io/` directory, e.g. `server/socket.io/chat.ts`:
```TypeScript
import * as sio from 'socket.io';

const chatServer = sio({
  path: '/socket.io/chat'
});

chatServer.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    chatServer.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

export default chatServer;
```

All the Socket.IO modules must have a default export of type `SocketIO.Server`.
They will be imported by `www.ts` and be attached to the `express` server automatically.

### Angular Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

```bash
npm run build
```
The server compiled files will be stored in the `dist/` directory. 
The client build artifacts will be stored in the `dist/public/` directory.
The `dist/` directory is the full distribution of the app.  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Deploying to AWS Elastic Beanstalk

Prerequisites:
* [AWS Account](https://console.aws.amazon.com/elasticbeanstalk)
* [AWS EB CLI](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)

Deploy the app to Elastic Beanstalk:
```bash
eb init --platform node.js --region us-west-2
eb create --instance_type t2.small --sample node-express-env
eb deploy
```

To view your application in the web browser run:
```bash
eb open
```

## Deploying to Google App Engine

Prerequisites:
* [Create GAE Project](https://console.cloud.google.com/projectselector/appengine/create?lang=nodejs&st=true)
* [Google Cloud SDK](https://cloud.google.com/sdk/docs/)

Deploy the app to the App Engine flexible environment:
```bash
gcloud app deploy
```

To view your application in the web browser run:
```bash
gcloud app browse
```

## Deploying to Heroku

Prerequisites:
* [Heroku Account](https://signup.heroku.com/signup/dc)
* [Heroku CLI](https://cli.heroku.com/)

Commit your changes to git, then deploy your app to Heroku:
```bash
heroku create
git push heroku master
```

To open the app in your browser, type:
```bash
heroku open
```

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
