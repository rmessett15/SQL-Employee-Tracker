// Importing department model from the models -> blueprint of our table
const Department = require('./Models/department');
const Role = require('./Models/role');
const Employee = require('./Models/employee');

// Importing sequelize which is our telephone to the database it allows javascript to talk with mysql
const sequelize = require('./connection');
const inquirer = require('inquirer');

// sync the database with our models
sequelize.sync({ force: false }).then(() => {
//   Department.create({ name: 'Accounting' });
    options();
    // createData();
});

function options() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add role',
          'View All Departments',
          'Add Department',
          //   `(Move up and down to reveal more choices)`,
        ],
        name: 'Employee-Tracker',
      },
    ])
    .then((answer) => {
      console.log(answer);
      console.log(db.query(SELECT * FROM, Department));

      // if (answer === 'View All Departments') {
      //   viewAllDepartments();
      // }
    })
    // .then(Department.create({ name: 'Accounting' }));
}

// function createData(choices, data) {
//     choices = `${data.Employee-Tracker}`;
//     data = Department.create({ name: "Accounting" });
//     return (choices, data);
// }

// const viewAllDepartments = () => {
//   return Query("SELECT * FROM Departments");
// };
