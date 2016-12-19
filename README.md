# MEAN Start

###  Angular2 + Angular-CLI + Express + Mongoose. All in TypeScript.

## Install npm packages

Run `npm install` to install the npm packages described in the `package.json`.

## Development server
Run `npm start` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/) for the app.

The `start` script defined in `package.json` is as:
```
"start": "concurrently \"ng serve --proxy-config proxy.conf.json\" \"cd server && tsc -w\" \"supervisor -w dist dist/server.js\" ",
```
The script starts 2 servers at the backgroud concurrently:

* `angular-cli` dev server, starts at http://localhost:4200/, serving the angular app.
The angular app will automatically reload if you change any of the client source files.

* `express` server, starts at http://localhost:3000/, serving the REST APIs.
The server will be automatically restarted by `supervisor` if you change any of the server source files.

The `angular-cli` dev server is configured to proxy all API calls to http://localhost:4200/api to go to `express` server http://localhost:3000/api, 
so that the whole app is available at [http://localhost:4200/](http://localhost:4200/).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

To build the client project, run `ng build` in the project directory. The build artifacts will be stored in the `dist/public/` directory. Use the `-prod` flag for a production build.

To build the server files, run `tsc` in the `server/` directory. The compiled js files will be stored in the `dist/` directory.

After building both the client and the server, the `dist/` directory will be the full distribution of the app.  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
