//for each role, do a seperate function 
const team = [];

function renderTeam(name, data) {

    const company = name

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
                <div class="container-fluid justify-content-center">
                    <a class="navbar-brand custom-brand" href="./team.html">${company} - Team Members</a>
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
    const employee = `<div class="col-sm-12 col-md-5 col-lg-3 member-card">
    <div class="card h-100 team-member-card">
        <div class="card-header row custom-card-header align-items-center justify-content-evenly">
            <div class="col-9 member-name">${manager.name}
                <h5 class="card-title member-title">${manager.getRole()}</h5>
            </div>
            <div class="col-3 member-icon">
                <i class="fas fa-bullhorn fa-3x"></i>
            </div>
        </div>
        <div class="card-body member-card-body">
            <ul class="member-list">
                <li><strong>Manager ID: </strong>${manager.id}</li>
                <li><strong>Email: </strong><a href="mailto:${manager.email}">${manager.email}</a></li>
                <li><strong>Office Number: </strong>${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`

    team.push(employee)
}

const renderEnginner = engineer => {
    const employee = `<div class="col-sm-12 col-md-5 col-lg-3 member-card">
    <div class="card h-100 team-member-card">
        <div class="card-header row custom-card-header align-items-center justify-content-evenly">
            <div class="col-9 member-name">${engineer.name}
                <h5 class="card-title member-title">${engineer.getRole()}</h5>
            </div>
            <div class="col-3 member-icon">
                <i class="fas fa-wrench fa-3x"></i>
            </div>
        </div>
        <div class="card-body member-card-body">
            <ul class="member-list">
                <li><strong>Engineer ID: </strong>${engineer.id}</li>
                <li><strong>Email: </strong><a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li><strong>GitHub: </strong><a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>     
            </ul>
        </div>
    </div>
</div>`

    team.push(employee)
}

const renderIntern = intern => {
    const employee = `<div class="col-sm-12 col-md-5 col-lg-3 member-card">
    <div class="card h-100 team-member-card">
        <div class="card-header row custom-card-header align-items-center justify-content-evenly">
            <div class="col-9 member-name">${intern.name}
                <h5 class="card-title member-title">${intern.getRole()}</h5>
            </div>
            <div class="col-3 member-icon">
                <i class="fas fa-clipboard-check fa-3x"></i>
            </div>
        </div>
        <div class="card-body member-card-body">
            <ul class="member-list">
                <li><strong>Intern ID: </strong>${intern.id}</li>
                <li><strong>Email: </strong><a href="mailto:${intern.email}">${intern.email}</a></li>            
                <li><strong>School: </strong>${intern.school}</li>
            </ul>
        </div>
    </div>
</div>`

    team.push(employee)
}


module.exports = renderTeam;
