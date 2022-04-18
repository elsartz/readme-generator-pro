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
  const install = data.Install;
    if (install) {
     installation = `-### [Installation](#Installation)`
    } else {
      return installation = '';
    }

  const usage = data.Usage;
    if (usage) {
      usagerow = `-### [Usage](#Usage)`
    } else {
      return usagerow = '';
    }
  
  const credits = data.Credits;
    if (credits) {
      creditsrow = `-### [Credits](#Credits)`
    } else {
      return creditsrow = '';
    }
  
  const license = data.License;
    if (license) {
      licenserow = `-### [License](#License)`
    } else {
      return licensesrow = '';
    }

  const tests = data.Tests;
    if (tests) {
      testsrow = `-### [Tests](#Tests)`
    } else {
      return testsrow = '';
    }
  
  return `# ${data.title}
  
  ## ${data.description}
  
  > ${data.paragraph}

  ## Table of Contents
  ${installation}
  ${usagerow}
  ${creditsrow}
  ${licenserow}
  ${testrow}
`;
}

module.exports = generateMarkdown;
