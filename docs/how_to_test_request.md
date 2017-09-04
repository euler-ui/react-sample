# How to test front-end requests

## Steps to test front end request with a mock server

* Setup proxy at package.json

```javascript
  "proxy": {
    "/api": {
      "target": "http://localhost:8000", // mock server url
      "changeOrigin": true
    }
  }
```

All front end request that prefixed by "api" will be proxied to mock server.

* Add mock server API

E.g., see [server/routes/build.js](https://github.com/euler-ui/react-sample/blob/master/server/routes/build.js) for mocking build list.

* Add front end code to fetch request.

E.g., See [redux/module/builds.js](https://github.com/euler-ui/react-sample/blob/master/src/redux/module/builds.js) for fetching build list request.

* run ```npm run server``` to start mock server.

* run ```npm start``` to start front-end dev server.

* At opened browser, go to [realworld](http://localhost:3000/home/realworld), you'll see build list renders correctly with mock data.
