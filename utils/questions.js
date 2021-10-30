const axios = require('axios');

function commonQuestions(role="manager"){
    return [
        {
            name: 'name',
            type: 'input',
            message: `What is the ${role}'s name?`
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
                    return ('Please enter a valid email!');
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
        message: 'What is the managers office number?'
    },
];

const internQuestions = [
    ...commonQuestions('Intern'),
    {
        name: 'school',
        type: 'input',
        message: 'What is the school name?'
    },
];

const engineerQuestions = [
    ...commonQuestions('Engineer'),
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        validate: function (userInput) {
            return axios.get(`https://api.github.com/users/${userInput}`)
                .then(res => {
                    return true
                })
                .catch(err => {
                    return ('please enter a valid github username account');
                });
        }
    },
];

const confirmNewEmployee = [
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?',
        default: 'true',
    }
];

const confirmNewEmployeeType = [
    {
        type: 'list',
        name: 'role',
        message: 'which type employee of employee would you like to add?',
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
    confirmNewEmployeeType
}
