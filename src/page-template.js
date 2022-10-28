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
  for (let i = 0; i < data.newEmployee.length; i++) {
    if (data.newEmployee[i].employeeChoice === 'Engineer') {
      return generateEngineer(data);
    } else if (data.newEmployee[i].employeeChoice === 'Intern') {
      return generateIntern(data);
    } else {
      return '';
    }
  }
}

function generateInitialCard(data) {
  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.managerName}</h5>
    <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.managerId}</li>
    <li class="list-group-item">Office Number: ${data.managerOfficeNumber}</li>
  </ul>

  <a href=mailto:"${data.managerEmail}" class="card-link custom-email">${data.managerEmail}</a>
</div>`
}

function generateEngineer(data) {
  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.newEmployee[0].employeeName}</h5>
    <p class="card-text">${data.newEmployee[0].employeeChoice}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.newEmployee[0].employeeId}</li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${data.newEmployee[0].engineersGithub}" class="card-link github-link">${data.newEmployee[0].engineersGithub}</a></li>
  </ul>

  <a href=mailto:"${data.newEmployee[0].employeeEmail}" class="card-link custom-email">${data.newEmployee[0].employeeEmail}</a>
</div>`
}

function generateIntern(data) {
  return `<div class="card col-12 col-md-4 col-lg-4 custom-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.newEmployee[0].employeeName}</h5>
    <p class="card-text">${data.newEmployee[0].employeeChoice}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.newEmployee[0].employeeId}</li>
    <li class="list-group-item">School: ${data.newEmployee[0].internSchool}</li>
  </ul>

  <a href=mailto:"${data.newEmployee[0].employeeEmail}" class="card-link custom-email">${data.newEmployee[0].employeeEmail}</a>
</div>`
}

module.exports = generateHtml