const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require ("./lib/generateHtml")

const question = [
    {
      type: "list",
      name: "manager-role",
      message: "Please select your role",
      choices: ["Manager"],
    },
    {
      type: "list",
      name: "manager",
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "manager-id",
      message: "Please enter your employee ID",
    },
    {
      type: "input",
      name: "manager-email",
      message: "Please enter your email address",
    },
    {
      type: "input",
      name: "manager-office",
      message: "Please enter your office number",
    },
    {
      type: "list",
      name: "manager",
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "add-new",
      message: "Please hit enter to add a new team member",
    },
    {
      type: "list",
      name: "new-employee",
      message: "Please select the role of your team member",
      choices: ["Engineer"]
    },
    {
      type: "list",
      name: "engineer",
      message: "Please enter employee name",
    },
    {
      type: "list",
      name: "engineer-id",
      message: "Please enter employee ID",
    },
    {
      type: "list",
      name: "engineer-email",
      message: "Please enter employee emai",
    },
    {
      type: "list",
      name: "engineer-github",
      message: "Please enter employee Github Username",
    },
    {
      type: "input",
      name: "add-new2",
      message: "Please hit enter to add a new team member",
    },
    {
      type: "list",
      name: "new-employee2",
      message: "Please select the role of your team member",
      choices: ["Engineer"]
    },
    {
      type: "list",
      name: "intern-name",
      message: "Please enter intern's name",
    },
    {
      type: "list",
      name: "intern-id",
      message: "Please enter intern's ID",
    },
    {
      type: "list",
      name: "intern-email",
      message: "Please enter intern's emai",
    },
    {
      type: "list",
      name: "intern-school",
      message: "Please enter school name",
    },
  ];


function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, function (error) {
      if (error) {
          console.log(error);
      }
      console.log("File has been created");
  });
}

//initialize app
function init() {
  inquirer.prompt(question).then((data) => {
      writeToFile("index.htlm", generateHtml({ ...data }));
  });
}

// Function call to initialize app
init();