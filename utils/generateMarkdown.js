const fs = require(`fs`);
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensing) {
  if (!licensing){
    return ``;
  }else{
    return `![${licensing} License](https://img.shields.io/badge/License-${licensing}-brightgreen)(${renderLicenseLink(licensing)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensing) {
  if (licensing === `GPL`){
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (licensing === `MIT`){
    return `http://lbesson.mit-license.org/`
  }
  if (licensing === `CC0-1.0`){
    return `https://creativecommons.org/publicdomain/zero/1.0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensing) {
  if (!licensing){
    return ``;
  } else {
    return ` ## Licenses
    This project is protected under  the ${licensing} license. To gain a further understanding, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licensing)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#licensing)
  * [Contribute](#contribute)
  * [Testing](#testing)
  * [Inqueries](#inqueries)
  * [Credits](#credit)

  ## Description
  ${data.describe}

  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  ${renderLicenseSection(data.licensing)}

  ## Contribute
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Inqueries
  If there are any Inqueries about this project contact me at: </br>
  GitHub: https://github.com/${data.ghub} </br>
  Email: ${data.mail}

  ## Credit
  ${data.naming}
`;
}

module.exports = generateMarkdown;
