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
    return `Follow the link for more info about the license [${license}](https://choosealicense.com/licenses/${license})`;
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
  
  return content = `${renderLicenseBadge(data.License)}
  # ${data.title}
  
  ## ${data.description}
  
  > ${data.paragraph}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
    ${data.sectionInstall}

  # Usage
    ${data.sectionUsage}

  # Contributing
    ${data.sectionCredit}
  ${renderLicenseSection(data.License)}
  ${renderLicenseLink(data.License)}

  # Tests
    ${data.sectionTests}

  # Questions
  If you have any questions, please contact me at [email](mailto:${data.email}).
  My GitHub username is *${data.gitname}* and ...
  my GitHub profile is [profile](${data.github})
`;
}
module.exports = generateMarkdown;
