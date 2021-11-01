const axios = require('axios');
const chalk = require('chalk');

const startPrompt = [
    {
        name: 'company',
        type: 'input',
        message: 'What is the name of your company?'
    },
];

function commonQuestions(role="manager"){
    return [
        {
            name: 'name',
            type: 'input',
            message: `What is the ${role}'s name? (Full Name, or just First Name. Your Choice :) )`
        },
        {
            name: 'id',
            type: 'input',
            message: `What is the ${role}'s id?`
        },
        {
            type: 'input',
            message: `What is the ${role}'s email address?`,
            name: 'email',
            validate: function (userInput) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return chalk.redBright('Please enter a valid email!');
                };
            }
        },
    ]
}

const managerQuestion = [
    ...commonQuestions('Manager'),
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is the managers office or branch number/id?'
    },
];

const internQuestions = [
    ...commonQuestions('Intern'),
    {
        name: 'school',
        type: 'input',
        message: 'What School/Education Institution is the intern from?'
    },
];

const engineerQuestions = [
    ...commonQuestions('Engineer'),
    {
        type: 'input',
        message: 'What is the engineers github username? (Please be exact as it will be validated)',
        name: 'github',
        validate: function (userInput) {
            return axios.get(`https://api.github.com/users/${userInput}`)
                .then(res => {
                    return true
                })
                .catch(err => {
                    return chalk.redBright('Please enter a valid github username account!');
                });
        }
    },
];

const confirmNewEmployee = [
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another team member?',
        default: 'true',
    }
];

const confirmNewEmployeeType = [
    {
        type: 'list',
        name: 'role',
        message: 'What is this team members role?',
        choices: [
            'manager',
            'engineer',
            'intern'
        ],
        default: 'manager',
    }
] 

module.exports = {
    managerQuestion,
    internQuestions,
    engineerQuestions,
    confirmNewEmployee,
    confirmNewEmployeeType,
    startPrompt
}
