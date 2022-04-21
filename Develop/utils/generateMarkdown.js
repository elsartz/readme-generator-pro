// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
      if (license.match('-')) {
        let oldbadge = license.split('-');
        newbadge = oldbadge.join('--');
      } else { newbadge = license}
    return `![badge](https://img.shields.io/badge/license-${newbadge}-green)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license !== 'no license') {
    return  `
  # License`
  } else {
    return ` `
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);
  var install = `- [Installation](#installation)`;
    if (!data.Install) {
      return install = ` `;      
    }

  var usage = `- [Usage](#usage)`;
    if (!data.Usage) {
      return usage = ` `;
    }
  
  var credits = `- [Credits](#credits)`;
    if (!data.Credits) {
      return credits = ` `;
    }
  
  var license = `- [License](#license)`;
    if (!data.License) {
      return license = ` `;
    }

  var tests = `- [Tests](#tests)`;
    if (!data.Tests) {
      return tests = ` `;
    }
  
  return content = `${renderLicenseBadge(data.License)}
  # ${data.title}
  
  ## ${data.description}
  
  > ${data.paragraph}

  ## Table of Contents
  ${install}
  ${usage}
  ${credits}
  ${license}
  ${tests}

  # Installation
    ${data.sectionInstall}

  # Usage
    ${data.sectionUsage}

  # Credits
    ${data.sectionCredit}
  ${renderLicenseSection(data.License)}
    ${renderLicenseLink(data.License)}

  # Tests
    ${data.sectionTests}
`;
}
module.exports = generateMarkdown;
