const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
  {
    type: "list",
    name: "manager1",
    message: "Hi Manager, please select your role",
    choices: ["Manager"],
  },
  {
    type: "input",
    name: "managername",
    message: "Please enter your name",
  },
  {
    type: "input",
    name: "managerid",
    message: "Please enter your employee ID",
  },
  {
    type: "input",
    name: "manageremail",
    message: "Please enter your email address",
  },
  {
    type: "input",
    name: "manageroffice",
    message: "Please enter your office number",
  },
  {
    type: "list",
    name: "newemployee",
    message: "Please select the role of your team member",
    choices: ["Engineer"]
  },
  {
    type: "input",
    name: "engineer",
    message: "Please enter employee name",
  },
  {
    type: "input",
    name: "engineerid",
    message: "Please enter employee ID",
  },
  {
    type: "input",
    name: "engineeremail",
    message: "Please enter employee email",
  },
  {
    type: "input",
    name: "engineergithub",
    message: "Please enter employee Github Username",
  },
  {
    type: "list",
    name: "newemployee2",
    message: "Please select the role of your team member",
    choices: ["Intern"]
  },
  {
    type: "input",
    name: "internname",
    message: "Please enter intern's name",
  },
  {
    type: "input",
    name: "internid",
    message: "Please enter intern's ID",
  },
  {
    type: "input",
    name: "internemail",
    message: "Please enter intern's email",
  },
  {
    type: "input",
    name: "internschool",
    message: "Please enter school name",
  },
]);
};

const generateHTML = (answer) =>
  `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" 
  crossorigin="anonymous">
</head>

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 jumbotron mb-3 team-header">
        <h1 class="text-center">My Team Member</h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="team-member col-12 d-flex justify-content-center";>
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${answer.manager}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answer.manager1}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${answer.managerid}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.manageremail}">${answer.manageremail}</a></li>
              <li class="list-group-item">Office number: ${answer.manageroffice}</li>
            </ul>
          </div>
          <div class="card-header">
            <h2 class="card-title">${answer.engineer}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answer.newemployee}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${answer.engineerid}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.engineeremail}">${answer.engineeremail}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${answer.engineergithub}" target="_blank" rel="noopener noreferrer">${answer.engineergithub}</a></li>
            </ul>
          </div>

          <div class="card-header">
            <h2 class="card-title">${answer.intern}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${answer.newemployee2}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: {${answer.internid}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.internemail}">${answer.internemail}</a></li>
              <li class="list-group-item">School: ${answer.internschool}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote index.html'))
    .catch((err) => console.error(err));
};

init();
