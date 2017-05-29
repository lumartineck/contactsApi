'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  Contact = mongoose.model('Contacts');

exports.allContacts = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    if (user) {
      res.json(user.contacts);
    }
  });
};

exports.createContact = function(req, res) {
  var newContact = new Contact(req.body);
  
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    if (user) {
      newContact.owner = user._id;
      user.contacts.push(newContact);   
      user.save(function(err, user) {
        if (err)
          res.send(err);
        res.json(user.contacts);
      });
    }
  });
};


exports.readContact = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    if (user) {
      res.json(user.contacts.id(req.params.contactId));
    }
  });
};


exports.updateContact = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    if (user) {
      var contact = user.contacts.id(req.params.contactId)
      contact.set(req.body);
      user.save(function(err, user) {
        if (err)
          res.send(err);
        res.json(contact);
      });
    }
  });
};


exports.deleteContact = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    if (user) {
      user.contacts.id(req.params.contactId).remove();
      user.save(function(err, user) {
        if (err)
          res.send(err);
        res.json({ message: 'Contact successfully deleted' });
      });
    }
  });
};
