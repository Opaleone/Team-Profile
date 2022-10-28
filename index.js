const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

const questions = [
  {
    type: 'input',
    message: 'What is the manager\'s name?',
    name: 'managerName'
  },
  {
    type: 'input',
    message: 'What is the manager\'s ID?',
    name: 'managerId'
  },
  {
    type: 'input',
    message: 'What is the manager\'s email?',
    name: 'managerEmail'
  },
  {
    type: 'input',
    message: 'What is the manager\'s office number?',
    name: 'managerOfficeNumber'
  },
  {
    type: 'loop',
    message: 'Add another employee?',
    questions: [
      {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: [
          'Manager',
          'Engineer',
          'Intern'
        ],
        name: 'employeeChoice'
      },
      {
        type: 'input',
        message: 'What is this employee\'s name?',
        name: 'employeeName'
      },
      {
        type: 'input',
        message: 'What is this employee\'s id?',
        name: 'employeeId'
      },
      {
        type: 'input',
        message: 'What is this employee\'s email?',
        name: 'employeeEmail'
      },
      {
        type: 'input',
        message: 'What is the manager\'s office number?',
        when: (answers) => answers.employeeChoice === 'Manager',
        name: 'anotherManager'
      },
      {
        type: 'input',
        message: 'What is the engineer\'s github?',
        when: (answers) => answers.employeeChoice === 'Engineer',
        name: 'engineersGithub'
      },
      {
        type: 'input',
        message: 'What school does this intern attend?',
        when: (answers) => answers.employeeChoice === 'Intern',
        name: 'internSchool'
      }],
    name: 'newEmployee'
  }
];

const createHtml = (data) => {
  fs.writeFile('./dist/index.html', generateHtml(data), (err) => {
    err ? console.error(err) : console.log('Success!');
  })
}

const init = () => {
  inquirer
    .prompt(questions).then((response) => {
      console.log(response);
      createHtml(response);
    })
}

init();