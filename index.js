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
      } else {
        updateEmployeeRole();
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

const addRole = async () => {
  // SELECT id AS VALUE, name AS name FROM Department;
  let departments = await Department.findAll({
    attributes: [
      ["id", "value"],
      ["name", "name"],
    ],
  });
  // console.log(departments);
  departments = departments.map((department) =>
    department.get({ plain: true })
  );
  // console.log(departments);
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "title",
      },
      {
        type: "input",
        message: "What would you like the salary to be?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department would you like to add this new role to?",
        name: "department_id",
        choices: departments,
      },
    ])
    .then((answer) => {
      Role.create(answer).then((data) => {
        options();
      });
    });
};

const addEmployee = async () => {
  let roles = await Role.findAll({
    attributes: [
      ["id", "value"],
      ["title", "name"],
    ],
  });
  roles = roles.map((role) => role.get({ plain: true }));
  let managers = await Employee.findAll({
    attributes: [
      ["id", "value"],
      ["first_name", "name"],
    ],
  });
  managers = managers.map((manager) => manager.get({ plain: true }));
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the new employee?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is the last name of the new employee?",
        name: "last_name",
      },
      {
        type: "list",
        message: "What is the role of the new employee?",
        name: "role_id",
        choices: roles,
      },
      {
        type: "list",
        message: "What manager would you like to assign to the new employee?",
        name: "manager_id",
        choices: managers,
      },
    ])
    .then((answer) => {
      Employee.create(answer).then((data) => {
        options();
      });
    });
};

// -------------------- UPDATE ----------------------

const updateEmployeeRole = async () => {
  let employees = await Employee.findAll({
    attributes: [
      ["id", "value"],
      ["first_name", "name"],
    ],
  });
  employees = employees.map((employee) => employee.get({ plain: true }));

  let roles = await Role.findAll({
    attributes: [
      ["id", "value"],
      ["title", "name"],
    ],
  });
  roles = roles.map((role) => role.get({ plain: true }));
  inquirer
    .prompt([
      {
        type: "list",
        message: "Who is the employee whose role you would like to update?",
        name: "id",
        choices: employees,
      },
      {
        type: "list",
        message:
          "What is the name of the updated role would you like to assign to this employee?",
        name: "role_id",
        choices: roles,
      },
    ])
    .then((answer) => {
      Employee.update(answer, {
        where: {
          id: answer.id,
        },
      }).then((data) => {
        options();
      });
    });
};

// Change Database structure to look more like mock up (add role names)
// Add cool title page
// Figure out why addRole and addEmployee are inserting null values into their corresponding tables
// Figure out how to update an employee role
// Update my database so its not messy and full of nulls and errors
// Do my assignment strictly with sequelize

// ********* Add last names to prompts within what Phillip and I changed, as well as the question format from asking about ids to names or titles
// Update database so its not messy and full of errors
// Add last names to prompts
// How to add null to list of manager options????

// Add readme.md
// Organize file structure/get rid of any files not needed
// Comment code base and format

// BONUS
