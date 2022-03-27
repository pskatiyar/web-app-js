'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
  id: {
    type: String,
    required: 'Kindly enter the employee id'
  },
  name: {
    type: String,
    default: ''
  },
  deptid: {
      type: String
    },
  email: {
          type: String
        },
  phone : {
  type: String
  }
});

module.exports = mongoose.model('Employee', Employee);