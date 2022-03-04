//license function
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return '![MIT License] ( https:// )';

  }
  return '';
}

//function that returns the license link
// If no license, return an empty string
function renderLicenseLink(license) {
  if (license !=='None') {
    return `## License 
    This README is licensed under the ${MIT} license.`;
  }
  return '';
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ${data.tableOfContents}
  ${data.installation}
  ${data.usage}
  ${data.licence}
  ${data.contributing}
  ${data.tests}
  ${data.questions}
  ${data.github}
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
