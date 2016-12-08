# MEAN Start

Angular2 + Angular-CLI + Express

This project was generated with [angular-cli](https://github.com/angular/angular-cli) 
and combined [express](https://github.com/expressjs/express) as a MEAN stack starter. 

## Development server
Run `npm start` for a dev server. 
```
"start": "concurrently \"ng serve --proxy-config proxy.conf.json\" \"supervisor -w server server/server.js\" ",
```
The CLI dev server `http://localhost:4200/` and express API server `http://localhost:3000/` are concurrently started. 
The CLI dev server is configured to proxy all calls to `http://localhost:4200/api` to go to `http://localhost:3000/api`

Navigate to `http://localhost:4200/` for the app. The app will automatically reload if you change any of the client source files.

The `express` server will automatically restart by `supervisor` if you change any of the server source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
