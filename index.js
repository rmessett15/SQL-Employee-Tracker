// Importing department model from the models -> blueprint of our table
const Department = require('./Models/department');
// Importing sequelize which is our telephone to the database it allows javascript to talk with mysql
const sequelize = require("./connection");

// sync the database with our models
sequelize.sync({ force: false }).then(() => {
    console.log('test asynch')
  Department.create({ name: "Accounting" });
});

console.log('Johnson')
Department.create({ name: "HR" });

// Create inquirer prompt that asks what i want to do departments but the only prompt as of now will be to list all departments 
// inquirer.prompt{

// }