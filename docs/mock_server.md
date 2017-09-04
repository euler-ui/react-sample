# Mock server

## Why mock server

### Reducing Dependency of back-end

We don't need rely on back-end server for front-end development. That'll be great when

* it takes too much time to startup back-end server.
* APIs at back-end server hasn't implemented yet.
* Back-end server crashed due to critical issue.

### Debugging

Mockserver are useful at debugging.

* Sometimes it is hard to reproduce a bug, we can just make the mock server return a specific bug-causing response.
* Mosttime local server data is differnt with production server, we can just make the mock server return the production server data

## What is mock server

It's a combination of:

* [Node](https://nodejs.org/en/) to run the server
* [Express](http://expressjs.com/) to route the requests

## Create mock server with express.

react-sample has already created a mock server, check [folder](https://github.com/euler-ui/react-sample/tree/master/server)
pls make sure you have run ```npm install``` at ```react-sample```
