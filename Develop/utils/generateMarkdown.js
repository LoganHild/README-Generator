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
  # ${data.title}
  ## Table of Contents
  \n-[Description](#description)\n
  \n-[Installation](#installation)\n
  \n-[Usage](#usage)\n
  \n-[Contributions](#contributions)\n
  \n-[Tests](#tests)\n
  \n-[Questions](#questions)\n

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
  Github: <a href="https://github.com/${data.github}">${data.github}</a>
`;
}

module.exports = generateMarkdown;
