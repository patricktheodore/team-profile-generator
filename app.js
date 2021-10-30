const inquirer = require('inquirer');

const questions = require('./utils/questions');

inquirer.prompt(questions.managerQuestion)


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