const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./utils/questions');
const renderTeam = require('./utils/renderTeam');

const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require('chalk');

let employees = [];
let company;

function startPrompt() {
    return inquirer.prompt(questions.startPrompt).then((answer) => {
        company = answer.company;
        managerQuestions();
    })
}

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
            console.log(chalk.greenBright('Finished adding Employees, generating your team profile now...'));  
            let html = renderTeam(company, employees);
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
    fs.writeFile("./dist/team.html", data, (err) => err ? console.log(chalk.redBright(err)) : console.log(chalk.greenBright('Team Profile file sucessfully written')));
}


function init() {
    console.log(chalk.greenBright('Welcome to Team Profile Generator! Please follow the prompts to generate a profile cards for your team members.'));
    startPrompt();
}

init();