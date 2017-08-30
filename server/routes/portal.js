const portal = (router) => {
  const users = [
    {
      id: 'guest',
      userName: 'guest',
      userPassword: 'guest',
    },
  ];

  router.route('/portal/users/login').post((req, res) => {
    const body = req.body;
    const userName = body.userName;
    const pwd = body.userPassword;
    const user = users.filter((user) => {
      return user.userName === userName && user.userPassword === pwd;
    })[0];
    setTimeout(() => {
      if (user) {
        res.json({
          status: 'SUCCESS',
          userName: user.userName,
        });
      } else {
        res.json({
          status: 'FAILURE',
        });
      }
    }, 3000);
  });
};
module.exports = portal;
