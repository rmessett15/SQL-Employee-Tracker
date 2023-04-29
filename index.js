// Importing Department model from the models folder -> blueprint of our table
const Department = require("./Models/department");
// Importing Role model from the models folder -> blueprint of our table
const Role = require("./Models/role");
// Importing Employee model from the models folder -> blueprint of our table
const Employee = require("./Models/employee");

// Importing sequelize which is our telephone to the database it allows javascript to talk with mysql
const sequelize = require("./connection");
// Importing inquirer (for prompting user)
const inquirer = require("inquirer");

// ?????????????????????????????????
// sync the database with our models
sequelize.sync({ force: false }).then(() => {
  //   Department.create({ name: 'Accounting' });
  options();
  // createData();
});
// ?????????????????????????????????

function options() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          //   `(Move up and down to reveal more choices)`,
        ],
        name: "employeeTracker",
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.employeeTracker === "View All Departments") {
        viewAllDepartments();
      } else if (answer.employeeTracker === "View All Roles") {
        viewAllRoles();
      } else if (answer.employeeTracker === "View All Employees") {
        viewAllEmployees();
      } else if (answer.employeeTracker === "Add Department") {
        addDepartment();
      } else if (answer.employeeTracker === "Add Role") {
        addRole();
      } else if (answer.employeeTracker === "Add Employee") {
        addEmployee();
      }
    });
}

// -------------- VIEW -----------------

const viewAllDepartments = () => {
  var departments = Department.findAll({ raw: true }).then((data) => {
    console.table(data);
    options();
  });
};

const viewAllRoles = () => {
  var roles = Role.findAll({ raw: true }).then((data) => {
    console.table(data);
    options();
  });
};

const viewAllEmployees = () => {
  var employees = Employee.findAll({ raw: true }).then((data) => {
    console.table(data);
    options();
  });
};

// ----------------- ADD --------------------

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like to name the department?",
        name: "addDepartment",
      },
    ])
    .then((answer) => {
      Department.create({ name: answer.addDepartment }).then((data) => {
        options();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "addRole",
      },
    ])
    .then((answer) => {
      Role.create({ name: answer.addRole }).then((data) => {
        options();
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new employee?",
        name: "addEmployee",
      },
    ])
    .then((answer) => {
      Employee.create({ name: answer.addEmployee }).then((data) => {
        options();
      });
    });
};

// Change Database structure to look more like mock up (add role names)
// Add cool title page
// Figure out why addRole and addEmployee are inserting null values into their corresponding tables
// Figure out how to update an employee role

// Add readme.md
// Organize file structure/get rid of any files not needed
// Comment code base and format

// BONUS