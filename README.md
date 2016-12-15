# MEAN Start

## Angular2 + Angular-CLI + Express

This project was generated with [angular-cli](https://github.com/angular/angular-cli) 
and combined [express](https://github.com/expressjs/express) as a MEAN stack starter. 

## Install npm packages

Run `npm install` to install the npm packages described in the `package.json`.

## Development server
Run `npm start` for a dev server. The `start` script deinfed in `package.json` is as:
```
"start": "concurrently \"ng serve --proxy-config proxy.conf.json\" \"cd server && tsc -w\" \"supervisor -w dist dist/server.js\" ",
```
The script starts the `angular-cli` dev server [http://localhost:4200/] and the `express` server [http://localhost:3000/] concurrently. 
The `angular-cli` dev server is configured to proxy all API calls to [http://localhost:4200/api] to go to `express` server [http://localhost:3000/api].

Navigate to [http://localhost:4200/] for the app. The angular app will automatically reload if you change any of the client source files.

The `express` web server will be automatically restarted by `supervisor` if you change any of the server source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

### Server

Run `cd server` and `tsc` to compile the server ts files. The compiled js files will be stored in the `dist/` directory.

### client

Run `ng build` to build the client project. The build artifacts will be stored in the `dist/public/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
