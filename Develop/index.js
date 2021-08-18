// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of all license options I could find from choose a license website
const Options = [
    'MIT License',    
    'Apache License 2.0',
    'GNU AGPLv3',
    'GNU GPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Boost Software License 1.0',
    'The Unlicense',
    'None'
];

// array of objects, questions for user prompts
const questions = [    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does the application use?',
        choices: Options
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a short description of this application?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required for installing this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for this software?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
];

// Writes the readme.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

// initialized function, gets everything in motion
function init() {
    inquirer.prompt(questions)
      .then((data) => {
          writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();