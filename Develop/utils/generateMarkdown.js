// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-green)`;
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

const licenseContent = ` `;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // let licenseToC = `- [License](#license)`;
  // const link = license;
  
  // if (license !== 'no license') {
  //   renderLicenseLink(link)
  //   // return licenseToC = ` `;
  // } else {
  //     licenseContent = `# License`;
        
  // }
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
  const install = `- [Installation](#installation)`;
    if (!data.Install) {
      return install = ` `;      
    }

  const usage = `- [Usage](#usage)`;
    if (!data.Usage) {
      return usage = ` `;
    }
  
  const credits = `- [Credits](#credits)`;
    if (!data.Credits) {
      return credits = ` `;
    }
  
  const license = `- [License](#license)`;
    if (!data.License) {
      return license = ` `;
    }

  const tests = `- [Tests](#tests)`;
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
