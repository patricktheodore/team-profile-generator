//for each role, do a seperate function 
const team = [];

function renderTeam(data) {

    const managers = data.filter(function (employees) {
        if (employees.getRole() === 'Manager') {
            return true
        }
    });

    const interns = data.filter(function (employees) {
        if (employees.getRole() === 'Intern') {
            return true
        }
    });

    const engineers = data.filter(function (employees) {
        if (employees.getRole() === 'Engineer') {
            return true
        }
    });

    managers.map(manager => renderManager(manager));
    engineers.map(enginner => renderEnginner(enginner));
    interns.map(intern => renderIntern(intern));

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>team-profile</title>
        <script src="https://kit.fontawesome.com/c1b942df5a.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header class="sticky-top">
            <nav class="navbar navbar-expand-lg sitcky-top navbar-dark bg-dark custom-nav">
                <div class="container-fluid">
                    <a class="navbar-brand custom-brand" href="./index.html">teamname.</a>
                </div>
            </nav>
        </header>
    
        <main class="container-fluid">
            
            <div class="row justify-content-center align-items-start">
                ${team}
            </div>
    
        </main>
    
    </body>
    
    </html>`
}

const renderManager = manager => {
    const employee = `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card h-100 team-member-card">
            <div class="card-header member-name">${manager.name}</div>
            <div class="card-body member-card-body">
                <h5 class="card-title member-title">${manager.getRole()}</h5>
                <ul class="member-list">
                    <li>${manager.id}</li>
                    <li>${manager.email}</li>
                    <li>${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`

    team.push(employee)
}

const renderEnginner = engineer => {
    const employee = `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card h-100 team-member-card">
            <div class="card-header member-name">${engineer.name}</div>
            <div class="card-body member-card-body">
                <h5 class="card-title member-title">${engineer.getRole()}</h5>
                <ul class="member-list">
                    <li>${engineer.id}</li>
                    <li>${engineer.email}</li>
                    <li>${engineer.github}</li>
                </ul>
            </div>
        </div>
    </div>`

    team.push(employee)
}

const renderIntern = intern => {
    const employee = `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card h-100 team-member-card">
            <div class="card-header member-name">${intern.name}</div>
            <div class="card-body member-card-body">
                <h5 class="card-title member-title">${intern.getRole()}</h5>
                <ul class="member-list">
                    <li>${intern.id}</li>
                    <li>${intern.email}</li>
                    <li>${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`

    team.push(employee)
}


module.exports = renderTeam;
