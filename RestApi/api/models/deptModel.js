'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Department = new Schema({
  id: {
    type: String,
    required: 'Kindly enter the dept id'
  },
  name: {
    type: String
  },
  costCenter: {
      type: String
    }
});

module.exports = mongoose.model('Department', Department);

