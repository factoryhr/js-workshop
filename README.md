# JavaScript Workshop

## Foreword: What is Webpack

Webpack is a front-end tool to build JavaScript module scripts for browsers.

It can be used similar to Browserify, and do much more.

```bash
browserify main.js > bundle.js
# be equivalent to
webpack main.js bundle.js
```

In this showcase, we will be using version 4 (current at time of typing).

## Installation

First, install dependencies.

``` bash
npm install
```

## Running development server

Webpack-dev-server is included (live-reloading from ./dist folder)

``` bash
npm run start
```

Now, feel free to change any files in ./src folder.