'use strict';

var mongoose = require('mongoose'),
  Employee = require('../models/employeeModel'),
  Department = require('../models/deptModel');

exports.list_all_employees = function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.list_all_employee_Department = function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
    else
        var employeeResult = [];
        var bar = new Promise((resolve, reject) => {
        employee.forEach((emp, index, array) =>{
            Department.findOne({id: emp.deptid}).exec().then(data => {
                console.log('Department'+ emp.deptid+ 'Data' + data);
                var employeeObj = {};
                employeeObj.id = emp.id;
                employeeObj.name = emp.name;
                employeeObj.deptid = emp.deptid;
                employeeObj.email = emp.email;
                employeeObj.phone = emp.phone;
//                employeeObj.departmentData = data;
                employeeObj.departmentName = data.name;
                employeeObj.costCenter = data.costCenter;
                console.log('Emp Name' +  emp.name);
                console.log('Dept Name' +  data.name);
                console.log('CC' +  data.costCenter);
                console.log('Emp with Department' +  employeeObj);
                employeeResult.push(employeeObj);
                if (index === array.length -1)
                    resolve();
            });
        });
        });
        bar.then(()=>{
            console.log('employeeResult' +  employeeResult)
            res.json(employeeResult);
        });

  });
};

exports.create_employee = function(req, res) {
  var new_employee = new Employee(req.body);
  new_employee.save(function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

//var getDepartment = function(departmentId, res) {
//console.log('****************************' + departmentId);
//  Department.find({id: departmentId}, function(err, dept) {
//    if (err){
//        console.log('err' + err);
//        res.send(err);
//    }else
//        console.log('****************************');
//        console.log(dept);
//        res.json(employee);
//  });
//};

exports.list_all_depts = function(req, res) {
  Department.find({}, function(err, dept) {
    if (err)
      res.send(err);
    res.json(dept);
  });
};

exports.create_dept = function(req, res) {
  var new_dept = new Department(req.body);
  new_dept.save(function(err, dept) {
    if (err)
      res.send(err);
    res.json(dept);
  });
};

