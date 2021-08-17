// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generates Markdown the way I want it with user input
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![license](https://img.shields.io/badge/license-${data.license}-blue?style=plastic&logo=appveyor)

  ## Table of Contents
  -[Description](#description)\n
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Contributions](#contributions)\n
  -[Tests](#tests)\n
  -[Questions](#questions)\n

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

  For any questions, don't hesitate to reach out!\n
  Email: <${data.email}>\n
  Github: <https://github.com/${data.github}>
`;
}

// exports to index file
module.exports = generateMarkdown;
