'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the contact'
  },
  phone: {
    type: String
  },
  owner: {
    type: mongoose.Schema.ObjectId, 
    ref: 'User'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the user'
  },
  contacts:[ContactSchema],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contacts', ContactSchema);
module.exports = mongoose.model('Users', UserSchema);