# Separation of front-end and back-end

## Why

### Divide work and work synchronously

 Keeping front-end/back-end separate encourages our developers to work synchronously on the front-end and back-end components of a feature. This means our features can be completed more quickly!

### Start work quick

 It’s much simpler on the frontend developers, since they can start their work without having to worry about “bugs in the build system” or other server side problems.

### Deployment felixiblity

 Since it's not monolithic anymore, front-end can deploy at anytime as we can without worring about back-end server status. 
 And it can also save deployment time since it just deploys front-end, which means it takes fewer time for fixing a blocking UI bug.
 Another great part is since it's separated, we can now deploy front-end codes to front end server like nginx or a CDN server to speed up time to download front end resources, and increase user experience.

## How

Modern JS frameworks like React/Angluar/Vue has great dev tool for development and build tools for generate production code which could be deployed to front-end server or a CDN server.
For our project, we use react-script for development/build.

See below articles for more detail.

* [How to run react-sample at local](./how_to_run.md)
* [How to test front-end requests](./how_to_test_request.md)
* [Mock Server](./mock_server.md)
