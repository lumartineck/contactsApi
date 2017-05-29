'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');


  // user Routes
  app.route('/users')
    .get(user.allUsers)
    .post(user.createUser);


  app.route('/users/:userId')
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser);
};