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
        "api": {
            "prefix": "/api"
        },
        "port": 8080
    }
}
```

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