'use strict';
module.exports = function(app) {
  var contact = require('../controllers/contactController');


  // contact Routes
  app.route('/users/:userId/contacts')
    .get(contact.allContacts)
    .post(contact.createContact);


  app.route('/users/:userId/contacts/:contactId')
    .get(contact.readContact)
    .put(contact.updateContact)
    .delete(contact.deleteContact);
};