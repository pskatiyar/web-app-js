'use strict';
module.exports = function(app) {
  var appRoot = require('../controllers/listController');

  app.route('/employees')
    .get(appRoot.list_all_employees)
    .post(appRoot.create_employee);


  app.route('/departments')
    .get(appRoot.list_all_depts)
    .post(appRoot.create_dept);

    app.route('/employeeWithDepartment')
        .get(appRoot.list_all_employee_Department);
};