# Project: Post-it Notes App

An application used to create post-it notes, built with React, JavaScript, and CSS.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

You will need the latest version of Node.js and yarn installed globally on your machine.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Library used: uuid

To generate RFC-compliant UUIDs in JavaScript (https://yarnpkg.com/package/uuid).
To create a random UUID install

### `yarn add uuid`

Create a UUID:

### `import { v4 as uuidv4 } from 'uuid';`

## Library used (to icons): material-ui

Install the package in your project directory with:

### `yarn add @material-ui/icons`

These components use the Material-UI SvgIcon component to render the SVG path for each icon, and so they have a peer-dependency on the next release of Material-UI.

If you are not already using Material-UI in your project, you can add it with:

### `yarn add @material-ui/core`

## Library used (to manage application routing): react-router-dom

Install the package in your project directory with:

### `yarn add react-router-dom`
