const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
  {
    type: 'input',
    message: 'Hello, How are you?',
    name: 'greeting'
  }
];

const createHtml = (data) => {
  fs.writeFile('index.html', generateHtml(data), (err) => {
    err ? console.error(err) : console.log('Success!')
  })
}

const init = () => {
  inquirer
    .prompt(questions).then((response) => {
      createHtml(response)
    })
}



init()