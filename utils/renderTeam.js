//for each role, do a seperate function 

const team = []; 


function renderTeam(data) {

const managers = data.filter(function(employees) {
    if(employees.getRole() === 'Manager') {
        return true
    }
});

const interns = data.filter(function(employees) {
    if(employees.getRole() === 'Intern') {
        return true
    }
});

const engineers = data.filter(function(employees) {
    if(employees.getRole() === 'Engineer') {
        return true
    }
});

console.log(managers);
console.log(interns);
console.log(engineers);

managers.map(manager => renderManager(manager));
engineers.map(enginner => renderEnginner(enginner));
interns.map(intern => renderIntern(intern));

console.log(team);
}








const renderManager = manager => { 
    const employee = `<div class="row justify-content-center align-items-start">
    <div class="col-sm-12 col-md-6 col-lg-3 portfolio-content">
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
    </div>
    </div>`
    
    team.push(employee)
}

const renderEnginner = engineer => {
    const employee = `<div class="row justify-content-center align-items-start">
    <div class="col-sm-12 col-md-6 col-lg-3 portfolio-content">
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
    </div>
    </div>`
    
    team.push(employee)
}

const renderIntern = intern => {
    const employee = `<div class="row justify-content-center align-items-start">
    <div class="col-sm-12 col-md-6 col-lg-3 portfolio-content">
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
    </div>
    </div>`
    
    team.push(employee)
}

module.exports = renderTeam;
