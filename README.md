# SQL-Employee-Tracker
Week-12 Challenge (SQL)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

 * [Description](#description)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Credits](#credits)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Contribution-Guidelines](#contribution-guidelines)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

This application was created so that business owners can view and manage the departments, roles, and employees within their company helping streamline planning and organization. The database used for this application was created with MySQL. It implements the sequelize dependency allowing for the database to be interacted with through the use of JavaScript. Although the complex file structuring and initial set up connecting tables and seeing the database made for more work than strictly seeding the database with a seeds.sql file, it did eliminate the need for long, confusing, intensive query statements.

Notable skills I gained and continued to cultivate while working on the application were how one would go about seeding a database strictly using MySQL, and with sequelize. Joining tables and re-creating new objects by use of the .map() function to gather desired displays of data. I also furthered my knowledge of the inquirer dependency, and accessing specific data within objects by use of dot notation.

Future development for this application along with the addition of unit testing would consist of creating functionality allowing the user to update employee managers, view employees by manager, view employees by department, being able to delete departments, roles, and employees from the database, and allowing the view of the total utilized budget of a department—in other words, the combined salaries of all employees in that department. I also think it would be interesting to create some animation within the terminal, making the application more polished.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1Zeat6kI6-0sAyqtCYQVErqzGD6215eBb/view

## Screenshots

![Screenshot1-week-12-challenge](https://user-images.githubusercontent.com/120127903/235738338-75c97105-7ef1-40f5-b00e-b0951f1d504d.png)

![Screenshot2-week-12-challenge](https://user-images.githubusercontent.com/120127903/235738357-ab29cfa1-9ce1-4687-952e-3724657a3787.png)

![Screenshot3-week-12-challenge](https://user-images.githubusercontent.com/120127903/235738376-e099a758-b20e-4a72-b56c-9bc58472d10f.png)

![Screenshot4-week-12-challenge](https://user-images.githubusercontent.com/120127903/235738400-31819eff-205e-4154-81df-61d214a3af13.png)

![Screenshot5-week-12-challenge](https://user-images.githubusercontent.com/120127903/235738416-1289849b-4e79-4b97-864d-85c88a980095.png)

## Technologies Used

This application is powered by Node.js (v16.19.1), JavaScript and SQL. It utilizes the node package manager (npm) dependencies sequelize (v6.31.0), mysql2 (v3.2.4), dotenv (16.0.3v), inquirer (v8.2.4), and chalk (v5.2.0).

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/SQL-Employee-Tracker.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).
   
      Commands to install each dependency:
         - Command for sequelize will be npm i sequelize
         - Command for mysql2 will be npm i mysql2
         - Command for dotenv will be npm i dotenv
         - Command for inquirer will be npm i inquirer@8.2.4
         - Command for chalk will be npm i chalk

6. Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell to run the command source schema.sql.

7. Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run all the files associated within the seeds folder. This needs to be done from the root directory because the.env file lives within the root. The commands will look like the following (node ./seeds/departments, node ./seeds/roles, node ./seeds/employees).

8. Once the database has been seeded, you will then be able to run the command npm start from the root directory to invoke the application.

## Credits

Much of this application followed outline code found within the week 13 class activities (specifically activity 10). I worked with a tutor (Phillip Loy) who helped me finalize the updating an employee role functionality. Also worked closely with one of class TA's Jenny Trevizo, and a good friend Brian Dillmann to handle joining the tables. 

## Features

Features of this application include the users ability to view, and manage the departments, roles, and employees within their company all from the command line. It utilizes sequelize, allowing us to interact with the database directly through JavaScript, giving the user an interactively dynamic experience.

## Usage Information

Usage of this application is very intuitive, once the application is started (see installation section for instructions on how to get the application set up and running), the user will then be prompted to select from various choices allowing them to either VIEW a Department, Role, or Employee table, ADD a Department, Role, or Employee to the database, or to UPDATE a particular Employee's Role. If the user chooses to ADD or UPDATE the database, their choice will then be reflected when the user then VIEWS the particular table that was UPDATED.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>
