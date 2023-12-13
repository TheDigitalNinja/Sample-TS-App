# Sample TS App

This is a Node.js application built with Express and TypeScript.

## Prerequisites

- Node.js
- npm

## Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/TheDigitalNinja/Sample-TS-App.git
npm install
```

## Running the Application

To run the application in development mode, use:

```sh
npm run dev
```

This will start the application with nodemon, which will automatically restart the server whenever you make changes to the source code.

To build the application for production, use:

```sh
npm run build
```

This will compile the TypeScript code into JavaScript.

To start the application in production mode, use:

```sh
npm start
```

This will start the compiled JavaScript code.

## Running Tests

To run the tests, use:

```sh
npm test
```

This will run the tests with Jest.

## Linting

To lint the code, use:

```sh
npm run lint
```

This will lint the code with ESLint.

## Healthcheck Endpoint

Our application includes a healthcheck endpoint (`/health`). This endpoint is used to check the health of our application. It's useful in a production environment to ensure that the application is running correctly and to take action if it's not.

Here's how you can use the healthcheck endpoint:

```sh
curl http://localhost:3000/health
```

## Editing the Files

You can edit the files in any text editor. If you're using Visual Studio Code, the workspace settings are already configured for you.

Remember to run the tests and the linter before committing your changes.
