// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of all license options I could find from choose a license website
const licenseOptions = [
    'GNU AGPLv3',
    'GNU GPLv2',
    'GNU GPLv3',
    'GNU LGPLv3',
    'Mozilla Public 2.0',
    'Apache 2.0',
    'MIT',
    'Boost Software 1.0',
    'The Unlicense',
    'ISC'
]
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
        choices: licenseOptions
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
    }
];
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
