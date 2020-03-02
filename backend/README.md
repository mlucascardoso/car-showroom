# Car Showroom API

The car showroom API

## Installation

`npm i`

## Environment Variables

Create a file `.env.json` on api dir and paste the following JSON into it:
```
{
    "node_env": "localhost",
    "custom": {
        "port": 8080,
        "api": {
            "prefix": "/api"
        },
        "database": {
            "username": "postgres",
            "password": "postgres",
            "name": "car_showroom",
            "host": "localhost",
            "dialect": "postgres",
            "logging": "true"
        }
    }
}
```

## Running API

In order to run the API correctly, do the following steps:
- Install API dependencies by running `npm i`
- To create the database with docker and docker-compose installed run `docker-compose up`
- After creating the database run `npm run migrate` to create tables
- After that just run `npm start`


## API Structure
```
api
│   
└───src
│   └───config -------> app setup
│   └───helper -------> app helpers
│   └───repository ---> app database interactions
│   └───router -------> app presentation
│   └───service ------> app business rule
│   | server.js
│   
└───test
│   └───unit
│   └───integration
│   .eslintrc.json
│   .gitignore
│   .huskyrc.json
│   .lintstagedrc.json
│   .commitlint.config.js
│   .jest-integration-config.js
│   .jest-unit-config.js
│   .jest.config.js
│   package.json
```