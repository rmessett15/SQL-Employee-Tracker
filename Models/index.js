const Department = require("./department.js")
const Role = require("./role.js");
const Employee = require("./employee.js");

Role.belongsTo(Department, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

Department.hasMany(Role, {
  foreignKey: "department_id",
  onDelete: "CASCADE",
});

module.exports = { Department, Role, Employee }