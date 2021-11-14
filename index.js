// TODO: Include packages needed for this application
const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `ghub`,
        message: `Please provide your Github Name:`,
        validate: ghubInput => {
            if (ghubInput){
                return true;
            } else{
                console.log(`Please link your GitHub name so others can discover your work.`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `mail`,
        message: `Please enter your email address:`,
        validate: mailInput =>{
            if (mailInput){
                return true;
            } else {
                console.log( `Please provide an email contact.`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `title`,
        message: `Please enter your projects title:`,
        validate: titlInput => {
            if (titlInput){
                return true;
            } else {
                console.log(`Please provide a valid Project Title`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'naming',
        message: 'Please provide your name to get credited for your work.',
        validate: nameInput =>{
            if (nameInput){
                return true;
            }else{
                console.log(`Enter your name, Otherwise you won't be credited for your work`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `install`,
        message: `What instructions must be followed to replicate a functioning program:`,
        validate: instInput =>{
            if(instInput){
                return true;
            } else {
                console.log(`Provide proper instructions so user can replicate a functioning program.`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `describe`,
        message: `Please enter the description of your project:`,
        validate: descInput =>{
            if (descInput){
                return true;
            } else {
                console.log(`It is extremely important to provide a quality description of what your project is meant to do.`)
            }
        }
    },
    {
        type: `input `,
        name: `contribution`,
        message: `What contributions could benefit this project:`,
        validate: contriInput =>{
            if (contriInput){
                return true;
            } else {
                console.log(`Enter instructions on how other GitHub users can contribute to your project.`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `use`,
        message: `Instruction for proper usage:`,
        validate: useInput =>{
            if(useInput){
                return true;
            } else {
                console.log(` Provide proper instructions so nagivation can be made simple.`);
                return false;
            }
        }
    },
    {
        type: `input`,
        name: `testing`,
        message: `Describe the tests taken for the application and how it's used.`,
        validate: tstInput =>{
            if (tstInput){
                return true;
            } else{
                console.log(` Provide the tests taken for your application how it's used.`);
                return false;
            }
        }
    },
    {
        type: `confirm`,
        name: `confirmLicensing`,
        message: `Will a license be included?`,
        default: false
    },
    {
        type: `list`,
        name: `licensing`,
        message: `What licenses are you including`,
        choices: [`GPl`, `MIT`, `CC0-1.0`],
        when: ({confirmLicensing}) => {
            if (confirmLicensing) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/README.md', data, err => {
            if (err){
                reject (err);

                return;
            }
            resolve({
                ok: true,
                message: console.log(`Success! To see your README progress to the "Dist" folder.`)
            });
        })
    })
}

// TODO: Create a function to initialize app
const init = ()  => {
    return inq.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput =>{
    return generateMarkdown(userInput);
})
.then (readmeInfo =>{
    return writeToFile(readmeInfo);
})
.catch( err =>{
    console.log(err);
})