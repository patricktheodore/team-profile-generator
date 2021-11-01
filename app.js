const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./utils/questions');
const renderTeam = require('./utils/renderTeam');

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let employees = [];

function managerQuestions() {
    return inquirer.prompt(questions.managerQuestion).then((answer) => {
        const addEmployee = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employees.push(addEmployee);
        addAnotherEmployee();
    });
}

function addAnotherEmployee() {
    return inquirer.prompt(questions.confirmNewEmployee).then((answer) => {
        if (answer.newEmployee) {
            promptEmployeeType();
        } else {
            console.log('Finished adding Emplyees, generating your team profile now...');  
            let html = renderTeam(employees);
            buildTeam(html)
            return;
        }
    })
}

function promptEmployeeType() {
    return inquirer.prompt(questions.confirmNewEmployeeType).then((answer) => {
        if (answer.role === 'manager') {
            managerQuestions();
        } else if (answer.role === 'engineer') {
            engineerQuestions();
        } else {
            internQuestions();
        }
    });
}

function engineerQuestions() {
    return inquirer.prompt(questions.engineerQuestions).then((answer) => {
        const addEmployee = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employees.push(addEmployee);
        addAnotherEmployee();
    });
}

function internQuestions() {
    return inquirer.prompt(questions.internQuestions).then((answer) => {
        const addEmployee = new Intern(answer.name, answer.id, answer.email, answer.school);
        employees.push(addEmployee);
        addAnotherEmployee();
    });
}

function buildTeam(data) {
    //render the team to a file
    fs.writeFile("./dist/team.html", data, (err) => err ? console.log(err) : console.log('Team Profile file sucessfully written'));
}


function init() {
    managerQuestions();
}


init();