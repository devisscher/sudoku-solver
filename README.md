# Sudoku Solver

Welcome to Sudoku Solver. This app was built to demonstrate the use of a backtracking algorithm in JavaScript. It was built using Angular. To add or change the puzzles provided, edit `src/app/data/mock-sudoku.ts` file. The app takes an array of sudoku objects like the following. 

```
// src/app/data/mock-sudoku.ts

{
    id: 1,
    name: 'Qlik Sample Puzzle',
    data: [
        [8, 0, 0, 7, 5, 0, 0, 0, 4],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [5, 1, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 4, 0, 0, 0, 0, 5, 0],
        [1, 0, 5, 0, 0, 0, 7, 0, 8],
        [0, 2, 0, 0, 0, 0, 4, 0, 0],
        [0, 0, 0, 9, 0, 2, 0, 6, 1],
        [0, 0, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 6, 1, 0, 0, 5]
    ]
}
```

The app can be found here: https://devisscher.github.io/sudoku-solver/

## Run the project

### Install modules

`npm install`

### and run the app

`npm start`

## Build

Run `npm run prod` to build the project. The build artifacts will be stored in the `dist/` directory. Adjust the --base-href to the path of the project folder to load all assets properly.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deploying to GitHub Pages

Run `npm run publish` to deploy to GitHub Pages.

## Generating documentation

Run `npm run compodoc`