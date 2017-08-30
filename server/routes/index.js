const build = require('./build');
const portal = require('./portal');
const express = require('express');

const combineRoutes = (routes) => {
  const router = express.Router();
  Object.keys(routes).forEach((key) => {
    routes[key](router);
  });
  return router;
};
const router = combineRoutes({
  build,
  portal,
});

module.exports = router;

// export default router
