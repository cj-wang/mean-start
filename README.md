# MEAN Start

**Angular2 + Angular-CLI + Express + Mongoose. All in TypeScript.** 

## Prerequisites

* [Install Node.js and update npm](https://docs.npmjs.com/getting-started/installing-node)

* [Install MongoDB](https://docs.mongodb.com/manual/installation/)

* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* Install global dependencies:
  ```bash
  npm install -g typescript
  npm install -g concurrently
  npm install -g supervisor
  ```

## Create a new project based on the MEAN Start

Clone this repo into new project folder (e.g., `my-proj`):
```bash
git clone https://github.com/wcj3570/mean-start my-proj
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
npm start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) for the app.
Shut it down manually with `Ctrl-C`.

The `start` script defined in `package.json` is:
```
"start": "concurrently \"ng serve --proxy-config proxy.conf.json\" \"cd server && tsc -w\" \"supervisor -w dist dist/server.js\" ",
```
The script starts 2 servers at the backgroud concurrently:

* **angular-cli dev server** - starts at `http://localhost:4200/`, serving the angular app.
The `angular` app will automatically reload if you change any of the client source files.

* **express server** - starts at `http://localhost:3000/`, serving the REST APIs.
The server will be automatically restarted by `supervisor` if you change any of the server source files.

The `angular-cli` dev server is configured to proxy all API calls to `http://localhost:4200/api` to go to the `express` server `http://localhost:3000/api`, 
so that the whole app is available at [http://localhost:4200/](http://localhost:4200/).

You're ready to write your application.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

* **Build the client project** - run `ng build` in the project directory. The build artifacts will be stored in the `dist/public/` directory. Use the `-prod` flag for a production build.

* **Compile the server files** - run `tsc` in the `server/` directory. The compiled js files will be stored in the `dist/` directory.

After building both the client and the server, the `dist/` directory is the full distribution of the app.  

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
