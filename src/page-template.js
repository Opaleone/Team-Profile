const Manager = require("../lib/manager");
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

function generateHtml(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eventify Team!</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <header id="page-topper">
    <h1 id="page-title">My Team</h1>
  </header>

  <section id="employees" class="row justify-content-around align-items-center my-5 w-50 mx-auto">
    ${generateInitialCard(data)}
    ${generateEmployeeCards(data)}
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>`
}

function generateEmployeeCards(data) {
  let employeeCards = '';

  for (let i = 0; i < data.newEmployee.length; i++) {
    if (data.newEmployee[i].employeeChoice === 'Engineer') {
      employeeCards += generateEngineer(data.newEmployee[i]);
    } else if (data.newEmployee[i].employeeChoice === 'Intern') {
      employeeCards += generateIntern(data.newEmployee[i]);
    } 
  }

  return employeeCards;
}

function generateInitialCard(data) {
  let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)

  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>

  <a href=mailto:"${manager.getEmail()}" class="card-link custom-email">${manager.getEmail()}</a>
</div>`
}

function generateEngineer(data) {
  let engineer = new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.engineersGithub)

  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" class="card-link github-link">${engineer.getGithub()}</a></li>
  </ul>

  <a href=mailto:"${engineer.getEmail()}" class="card-link custom-email">${engineer.getEmail()}</a>
</div>`
}

function generateIntern(data) {
  let intern = new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.internSchool)

  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>

  <a href=mailto:"${intern.getEmail()}" class="card-link custom-email">${intern.getEmail()}</a>
</div>`
}

module.exports = generateHtml