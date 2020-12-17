# LibraryMgmnt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server
Should have node js intalled.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Design Startegy

To solve the statement I could have used 3 approaches:
1. Prepare a complete MEAN stack app to solve the scenarios
2. Better would have been Firestore as a DB. Leveraging the power of backend-as-a-service.
3. In the nick of time & respect to DRY & KISS principle. I chose the below approach.
3.1	Mocked the API data from Marvel Comics. (Yeah I love marvel, ;-) )
3.2 Implemented a single store pattern. Giving a single point to add & retrive data.
3.3 Completely uncluttered code courtesy of the modular patter I follow.
