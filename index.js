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


const inquirer = require('inquirer');
const fs = require('fs');

function criteriaWriteUp(readMeContent) {
    fs.writeFile('readme-file.txt', readMeContent, (err) => {
        err ? console.log(err) : console.log('Success!');
    })
}

const userCriteria = [
    {
        type : 'input',
        name : 'title',
        message: 'What is the title of this application?'
    },
    {
        type : 'input',
        name : 'description',
        message: 'What is a short description of this application?'
    },
    {
        type : 'input',
        name : 'tableOfContents',
        message: 'What would you like your Table of Contents to contain?'
    },
    {
        type : 'input',
        name : 'installation',
        message: 'What steps are required for installing this application?'
    },
    {
        type : 'input',
        name : 'usage',
        message: 'How do you use the application?'
    },
    {
        type : 'input',
        name : 'license',
        message: 'What license does the application use?'
    },
    {
        type : 'input',
        name : 'contributing',
        message: 'Who contributed to this application?'
    },
    {
        type : 'input',
        name : 'tests',
        message: 'How do you run tests for this software?'
    },
    {
        type : 'input',
        name : 'questions',
        message: 'Any questions?'
    },
];

inquirer.prompt(userCriteria).then((userCriteria) => {
    let readMeContent = `# ${userCriteria.title}`;
    readMeContent += `\n## Description\n ${userCriteria.description}`;
    readMeContent += `\n## Table of Contents\n ${userCriteria.tableOfContents}`;
    readMeContent += `\n## Installation\n ${userCriteria.installation}`;
    readMeContent += `\n## Usage\n ${userCriteria.usage}`;
    readMeContent += `\n## License\n ${userCriteria.license}`;
    readMeContent += `\n## Contributions\n ${userCriteria.contributing}`;
    readMeContent += `\n## Testing\n ${userCriteria.tests}`;
    readMeContent += `\n## Questions\n ${userCriteria.questions}`;

    criteriaWriteUp(readMeContent);
});