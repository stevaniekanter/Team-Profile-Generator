const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = (answer) =>
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
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answer.manager-role}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${answer.manager-id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.manager-email}">${answer.manager-email}</a></li>
              <li class="list-group-item">Office number: ${answer.manager-office}</li>
            </ul>
          </div>
          <div class="card-header">
            <h2 class="card-title">${answer.engineer}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answer.new-employee}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${answer.engineer-id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.engineer-email}">${answer.engineer-email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${answer.engineer-github}" target="_blank" rel="noopener noreferrer">${answer.engineer-github}</a></li>
            </ul>
          </div>

          <div class="card-header">
            <h2 class="card-title">${answer.intern}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${answer.new-employee2}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: {${answer.intern-id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answer.intern-email}">${answer.intern-email}</a></li>
              <li class="list-group-item">School: ${answer.intern-school}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</body>

</html>`

inquirer.propmp ([
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
      type: "list",
      name: "new-employee2",
      message: "Please select the role of your team member",
      choices: ["Intern"]
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
])
.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});
// Function call to initialize app
init();