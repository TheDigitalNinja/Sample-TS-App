# Sample TS App
![CI](https://github.com/TheDigitalNinja/Sample-TS-App/actions/workflows/ci.yml/badge.svg)

This is a Node.js application built with Express and TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Linting](#linting)
- [Docker](#docker)
- [Healthcheck Endpoint](#healthcheck-endpoint)

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

## Docker

This application includes a Dockerfile that you can use to build a Docker image of the application. Here's how you can do it:

```sh
docker build -t sample-ts-app .
```

This will build a Docker image of the application and tag it as `sample-ts-app`.

To run the application in a Docker container, use:

```sh
docker run -p 3000:3000 sample-ts-app
```

This will start a Docker container from the my-application image and map port 3000 in the container to port 3000 on your machine.

You can then access the application at [http://localhost:3000](http://localhost:3000).
