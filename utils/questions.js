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
            name: 'email',
            type: 'input',
            message: `What is the ${role}'s email?`
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
        message: 'What is the schhol name?'
    },
];

const engineerQuestions = [
    ...commonQuestions('Engineer'),
    {
        name: 'github',
        type: 'input',
        message: 'What is the engineers github?'
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
        name: 'employeeType',
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
