const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);

app.set('port', process.env.PORT || 8000);

app.use('/api/', router);

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
