// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  https://img.shields.io/badge/license-${data.license}-blue

  # ${data.title}
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

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

  For any questions, don't hesitate to reach out!\n
  Email: <a href="mailto:${data.email}">${data.email}</a>\n
  Github: <a href="https://github.com/${data.github}">https://github.com/${data.github}</a>
`;
}

module.exports = generateMarkdown;
