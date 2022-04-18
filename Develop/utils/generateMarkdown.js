// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-green)`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  const install = `- ### [Installation](#Installation)`;
    if (!data.Install) {
      return install = '';      
    }

  const usage = `- ### [Usage](#Usage)`;
    if (!data.Usage) {
      return usage = '';
    }
  
  const credits = `- ### [Credits](#Credits)`;
    if (!data.Credits) {
      return credits = '';
    }
  
  const license = `- ### [License](#License)`;
    if (!data.License) {
      return license = '';
    }

  const tests = `- ### [Tests](#Tests)`;
    if (!data.Tests) {
      return tests = '';
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


`;
}

module.exports = generateMarkdown;
