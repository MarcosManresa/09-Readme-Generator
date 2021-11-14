const fs = require(`fs`);
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ``;
  }else{
    return `[${license} License](https://img.shields.io/badge/License-${license}-brightgreen)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `GPL`){
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === `MIT`){
    return `http://lbesson.mit-license.org/`
  }
  if (license === `CC0-1.0`){
    return `https://creativecommons.org/publicdomain/zero/1.0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ``;
  } else {
    return ` ## Licenses
    This project is protected under  the ${license} license. To gain a further understanding, click the license button at the top.`
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
  * [Contributions](#contribution)
  * [Testing](#testing)
  * [Inqueries](#inquerie)
  * [Credits](#credit)

  ## Description
  ${data.describe}

  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  ${renderLicenseSection(data.licensing)}

  ## Contributions
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Inqueries
  If there are any Inqueries about this project contact me at:
  GitHub: https://github.com/${data.ghub}
  Email: ${data.mail}

  ## Credits
  ${data.naming}
`;
}

module.exports = generateMarkdown;
