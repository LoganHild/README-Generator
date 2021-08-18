// returns different license badges for selected license, returns empty string for none option
function renderLicenseBadge(data) {
  let license = `${data.license}`;
  if (license !== 'None') {
    switch(license) {
      case 'MIT License':
        return `![License](https://img.shields.io/badge/license-${data.license}-success?style=plastic&logo=appveyor)`;
      case 'Apache License 2.0':
        return `![License](https://img.shields.io/badge/license-${data.license}-yellow?style=plastic&logo=appveyor)`;
      case 'GNU AGPLv3':
        return `![License](https://img.shields.io/badge/license-${data.license}-red?style=plastic&logo=appveyor)`;
      case 'GNU GPLv3':
        return `![License](https://img.shields.io/badge/license-${data.license}-blueviolet?style=plastic&logo=appveyor)`;
      case 'GNU LGPLv3':
        return `![License](https://img.shields.io/badge/license-${data.license}-blue?style=plastic&logo=appveyor)`;
      case 'Mozilla Public License 2.0':
        return `![License](https://img.shields.io/badge/license-${data.license}-important?style=plastic&logo=appveyor)`;
      case 'Boost Software License 1.0':
        return `![License](https://img.shields.io/badge/license-${data.license}-brightgreen?style=plastic&logo=appveyor)`;
      case 'The Unlicense':
        return `![License](https://img.shields.io/badge/license-${data.license}-9cf?style=plastic&logo=appveyor)`;
    }
  } else {
    return '';
  }
}

// returns different license links for selected license, returns empty string for none
function renderLicenseLink(data) {
  let license = `${data.license}`;
  if (license !== 'None') {
    switch(license) {
      case 'MIT License':
        return '<https://choosealicense.com/licenses/mit/>';
      case 'Apache License 2.0':
        return'<https://choosealicense.com/licenses/apache-2.0/>';
      case 'GNU AGPLv3':
        return '<https://choosealicense.com/licenses/agpl-3.0/>';
      case 'GNU GPLv3':
        return '<https://choosealicense.com/licenses/gpl-3.0/>';
      case 'GNU LGPLv3':
        return '<https://choosealicense.com/licenses/lgpl-3.0/>';
      case 'Mozilla Public License 2.0':
        return 'https://choosealicense.com/licenses/mpl-2.0/>';
      case 'Boost Software License 1.0':
        return '<https://choosealicense.com/licenses/bsl-1.0/>';
      case 'The Unlicense':
        return '<https://choosealicense.com/licenses/unlicense/>';
    }
  } else {
    return '';
  }
}
// returns license section of readme if license is selected, returns empty string for none
function renderLicenseSection(data) {
  let license = `${data.license}`;
  if (license !== 'None') {
    return `## License\n  ${data.license}`;
  } else {
    return '';
  }
}

// Generates Markdown the way I want it with user input
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data)}

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
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}
  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me with any questions!

  Email: <${data.email}>\n
  Github: <https://github.com/${data.github}>
`;
}

// exports to index file
module.exports = generateMarkdown;
