const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./utils/questions');

const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];


//get manager info. 

//add employee data to employees array. 

//see if user wants to add another employee

let employee = {} 

return inquirer.prompt(questions.managerQuestion).then((answer) => {
    employee['role'] = 'Manager';
    employee['name'] = answer.name;
    employee['id'] = answer.id;
    employee['email'] = answer.email;
    employee['officeNumber'] = answer.officeNumber;

    const addEmployee = new Manager (employee['name'], employee['id'], employee['email'], employee['officeNumber']);

    employees.push(addEmployee);

    console.log(employees)

})






function addAnotherEmployee() {
    return inquirer.prompt(questions.confirmNewEmployee)
}

function promptEmployeeType() {
    return inquirer.prompt(questions.confirmNewEmployeeType)
}



function managerQuestion() {
    inquirer.prompt(questions.managerQuestion)
}

inquirer.prompt(questions.confirmNewEmployee)
.then((data) => {
    console.log(data);
    if (data.newEmployee) {

    }
});

// if(role.toLowerCase() === 'manager') {
//     return inquirer.prompt(questions.managerQuestion)
// }

// if(role.toLowerCase() === 'engineer') {
//     return inquirer.prompt(questions.engineerQuestions)
// }

// if(role.toLowerCase() === 'intern') {
//     return inquirer.prompt(questions.internQuestions)
// }

// geneerateTeamProfile();


// user is prompted for the manager

//who else is in the team
//add intern or engineer

// until, no one else
//generate html.

//logic

//ask manager question, confirm if they want to add another manager. 
//if yes, run managerquestion prompt

//if no, ask which employee would you like to add? 
//check if intern or engineer, ask appropriate questions. 
//ask if they would like to add another employee. 
//if yes , ask which employee, and run apparopraite questions
//if no, run geneerateTeamProfile function. 


//store employee data