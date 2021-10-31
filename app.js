const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./utils/questions');
const renderTeam = require('./utils/renderTeam')

const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];


//get manager info. 

//add employee data to employees array. 

//see if user wants to add another employee
function managerQuestions() {
 return inquirer.prompt(questions.managerQuestion).then((answer) => {
    const addEmployee = new Manager (answer.name, answer.id, answer.email, answer.officeNumber);
    employees.push(addEmployee);
    addAnotherEmployee();
});
}

function addAnotherEmployee() {
    return inquirer.prompt(questions.confirmNewEmployee).then((answer) => {
        if (answer.newEmployee) {
            promptEmployeeType();
        } else {
            //render html - todo
            console.log('Finished adding Emplyees, generating your team profile now...');
            console.log(employees);
            renderTeam(employees);
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
       const addEmployee = new Engineer (answer.name, answer.id, answer.email, answer.github);
       employees.push(addEmployee);
       addAnotherEmployee();
   });
   }

   function internQuestions() {
    return inquirer.prompt(questions.internQuestions).then((answer) => {
       const addEmployee = new Intern (answer.name, answer.id, answer.email, answer.school);
       employees.push(addEmployee);
       addAnotherEmployee();
   });
   }

function init() {
    managerQuestions();
}

init();