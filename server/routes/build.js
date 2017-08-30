const assert = require('assert');
const builds = require('./data.js');

const build = (router) => {
  const genID = () => {
    return (Math.random() + 1).toString(36).substring(2);
  };

  router.route('/builds').get((req, res) => {
    res.json(builds);
  });

  router.route('/builds/:buildId').put((req, res) => {
    const type = req.query.componentType;
    const data = req.body;
    const buildName = data.name;
    const repositoryURL = data.url;
    assert.ok(buildName);
    assert.ok(repositoryURL);
    builds.push({
      id: genID(),
      name: buildName,
      repository: repositoryURL,
      lastBuildStatus: 'NA',
    });
    res.json(true);
  });

  router.route('/builds/run/:buildId').put((req, res) => {
    const buildId = req.params.buildId;
    assert.ok(buildId);

    const buildObj = builds.filter((item) => {
      return item.id === buildId;
    })[0];
    assert.ok(build, 'Build Id is wrong');
    const instanceId = genID();
    buildObj.curInstanceId = instanceId;
    buildObj.progress = 0;
    buildObj.status = 'RUNNING';
    buildObj.lastBuildStatus = 'RUNNING';
    buildObj.st = new Date().getTime();
    delete buildObj.time;
    res.json(instanceId);
  });

  router.route('/builds/progress/:instanceId').get((req, res) => {
    const instanceId = req.params.instanceId;
    assert.ok(instanceId);
    const buildObj = builds.filter((item) => {
      return item.curInstanceId === instanceId;
    })[0];
    assert.ok(build, 'instanceId is wrong');

    let progress = buildObj.progress;
    let status = 'RUNNING';

    // when progress > 50%, 1/3 chance to set status failure
    if (progress > 0.5 && parseInt(progress * 100) % 3 === 1) {
      status = 'FAILURE';
      buildObj.lastBuildStatus = 'SUCCESS';
    } else {
      progress += parseInt(Math.random() * 50) / 100;
    }

    if (progress >= 1) {
      progress = 1;
      status = 'SUCCESS';
      buildObj.time = new Date().getTime() - buildObj.st;
      buildObj.lastBuildStatus = 'SUCCESS';
    }

    buildObj.progress = progress;
    buildObj.status = status;
    res.json({
      progress,
      status,
      time: buildObj.time,
    });
  });
  router.route('/builds/logs/:instanceId').get((req, res) => {
    const instanceId = req.params.instanceId;
    assert.ok(instanceId);
    const buildObj = builds.filter((item) => {
      return item.curInstanceId === instanceId;
    })[0];
    assert.ok(buildObj, 'instanceId is wrong');
    if (buildObj.status === 'RUNNING') {
      res.json(`Current Build Progress:${parseInt(buildObj.progress * 100)}%`);
    } else {
      res.json('');
    }
  });
};
module.exports = build;
